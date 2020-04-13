<!DOCTYPE html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Ensures optimal rendering on mobile devices. -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!-- Optimal Internet Explorer compatibility -->
  </head>
  
  <body>
    <script
      src="https://www.paypal.com/sdk/js?client-id=Ac3hqRakny8rxLZtDmBdhnUOcqfgw37Y2qQFhviZdAV91pBpF72IXXtz1TbbJkUV-20-z2VOFRRJ7Fbl&currency=CAD"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
    </script>
    <div id="paypal-button-container"></div>
    <script>
      paypal.Buttons().render('#paypal-button-container');
    </script>
  </body>
</html>
