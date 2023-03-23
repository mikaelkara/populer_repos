# GitHub Popüler Repo Listesi

Bu betik, kullanıcının GitHub profiline yüklenen popüler repoların listesini alır. Betik, GitHub API'sini kullanarak popüler repo listesini "populer_repolar.yaml" dosyasına yazdırır.

## Kullanım

1. `populer_repolar.yaml` dosyasını indirin veya kopyalayın.
2. `populer_repolar.yaml` dosyasını projenize dahil edin.
3. `index.html` dosyasında JavaScript kodunu kullanarak, popüler repoların listesini gösterin.

## Betik Ayrıntıları

Bu Python betiği, kullanıcının GitHub kullanıcı adını isteyerek, GitHub API'sini kullanarak popüler repoların listesini alır. Yıldız sayısı 10'dan fazla olan repolar, popüler repolar olarak tanımlanır ve isimleri "populer_repolar.yaml" dosyasına yazdırılır.

### Gereksinimler

- requests
- PyYAML

### Kurulum

Gereksinimleri yüklemek için:

```sh
pip install -r requirements.txt
