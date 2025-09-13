# Discord Message Viewer

Bu proje, Discord kanallarındaki mesajları bot token kullanarak terminalden görüntülemenizi sağlayan interaktif bir uygulamadır. Mesajlar kronolojik olarak sıralanır, kullanıcı adları renkli olarak öne çıkar ve hatalar kullanıcı dostu şekilde raporlanır.

## Özellikler

- Discord kanallarındaki mesajları çekme
- Mesajları eski → yeni kronolojik sırayla gösterme
- Kullanıcı adlarını renkli olarak terminalde öne çıkarma
- Kanal ID girerek istediğiniz kanalın mesajlarını görüntüleme
- Hataları anlaşılır ve kullanıcı dostu şekilde raporlama
- `exit` komutu ile programı güvenli bir şekilde kapatma

## Gereksinimler

- Node.js v18 veya üzeri
- npm
- Discord bot token (botun ilgili kanalda `READ_MESSAGE_HISTORY` yetkisine sahip olması gerekir)

## Kurulum

1. Depoyu klonlayın veya indirin:
```bash
git clone https://github.com/egecher/discord-messages-tool.git
cd discord-messages-tool
````

2. Gerekli paketleri yükleyin:

```bash
npm install
```

3. `.env` dosyasını oluşturun ve bot token’ınızı ekleyin:

```env
TOKEN=BotTokeninizBuraya
```

## Kullanım

```bash
node index.js
```

[Başlat](Başlat.bat) dosyasından hızlıca çalıştırabilirsiniz.

Program çalıştığında terminalden:

```
Kanal ID giriniz (çıkmak için "exit" yazın):
```

* Kanal ID girip Enter’a basarsanız, son mesajlar kronolojik ve renkli olarak görüntülenir.
* `exit` yazarak programı kapatabilirsiniz.

## Örnek Çıktı

```
egecher
> Merhaba, nasılsınız?

user2
> Selam! İyiyim, sen nasılsın?
```

## Paketler

* [axios](https://www.npmjs.com/package/axios) - HTTP istekleri için
* [dotenv](https://www.npmjs.com/package/dotenv) - Çevresel değişkenler için

## Lisans

Bu proje [MIT lisansı](LICENSE) altında dağıtılmaktadır.