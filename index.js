// inquirer i projemize import ettik.
import inquirer from 'inquirer';

// qr-image i projemize import ettik.
import qr from 'qr-image';

// fs i projemize import ettik.
import fs from 'fs';


inquirer
  .prompt([
    {
        // kullanıcıya url soruldu ve bu url bilgisi name kısmında ki url de tutuldu.
        "name":"url",
        "message":"Lütfen bir url giriniz. : "
    }
  ])
  .then((answers) => {
    // kullanıcının girdiği url i  url adında ki değişkene attık.
    const url = answers.url;

    // girilen url yi png ye dönüştürdük.
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-code.png'));

    // girilen url i url.txt adında bir dosyaya yazdırdık.
    fs.writeFile('url.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 
  })
  // hata olması durumunda error döndürdük.
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });