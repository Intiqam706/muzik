const config = {
  "ownerID": "713094864778166403",//Bu kısıma, kendi ID'niz. 
  "sahip": ["713094864778166403"],
  "admins": ["755708268017483796"],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": ["459407976000651286"],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "Nzk3ODc1NTM1MTMyNDkxNzg3.X_s1fw.5wpfyQODIq-uiwtN_pleiGOedTQ",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "d3Yix8yetmtVMQhOVVd6ma1249pa27NC",//Client secret.
    "callbackURL": `https://tengora-muzik.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Codare",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://tengora-muzik.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;