tsc
gulp deploy.prod
ssh adrian2700@s13.mydevil.net "npm install --prefix ~/domains/busemdobelgii.pl/public_nodejs; devil www restart busemdobelgii.pl"
