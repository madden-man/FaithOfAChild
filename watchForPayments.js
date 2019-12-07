var http = require('http');
const stripe = require('stripe')('sk_test_hx9sn17wUV7AlsunrEuCNSid00kHuGkMDK');

var neitherHTML =
  '<html><head><title>Post Example</title></head>' +
  '<script>window.location = \'https://faithofachildfoundation.org/donate\'</script></html>';

var successHTML =
  '<html><head><title>Post Example</title></head>' +
  '<script>window.location = \'https://faithofachildfoundation.org/donate?success=true\'</script></html>';

var failureHTML =
  '<html><head><title>Post Example</title></head>' +
  '<script>window.location = \'https://faithofachildfoundation.org/donate?success=false\'</script></html>';


http.createServer(function (req, res) {
  try {
    var body = "";
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      // Get the payment token ID submitted by the form:
      const params = new URLSearchParams(body);

      if (params.get('stripeToken') && params.get('paymentAmount')) {
        console.log(params.get('stripeToken'));
        console.log(params.get('paymentAmount'));

        const token = params.get('stripeToken');
        const paymentAmount = params.get('paymentAmount');

        (async () => {
          const charge = await stripe.charges.create({
            amount: paymentAmount,
            currency: 'usd',
            description: 'more monay',
            source: token,
          });
          console.log(charge);
          res.writeHead(200);
          res.end(successHTML);
        })();
      } else {
        res.writeHead(200);
        res.end(neitherHTML);
      }
    });
  } catch (e) {
    console.log(e);
    res.writeHead(200);
    res.end(failureHTML);
  }
}).listen(8080);
