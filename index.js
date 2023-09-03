const qrCode= require('qrcode');
qrCode.toFile('E:/Back to basics/qr code generator/output.png','Is this working',{errorCorrectionLevel:'H'},(err)=>{
    if(err) throw err;
    console.log('Qr code saved')
})

qrCode.toString('https://www.youtube.com/watch?v=O1PgqUqZKTA&list=PLQnljOFTspQUNnO4p00ua_C5mKTfldiYT&index=17', {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function(err, data) {
    if (err) throw err;
    console.log(data);
  });
