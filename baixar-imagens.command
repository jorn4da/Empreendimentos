#!/bin/bash
# Baixa as 88 imagens dos empreendimentos para assets/img/
# Uso: abra o Terminal nesta pasta e rode:  bash baixar-imagens.sh
cd "$(dirname "$0")"
mkdir -p assets/img
ok=0; fail=0
if [ ! -s "assets/img/69cd31f2e807e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69cd31f2e807e.jpeg" -o "assets/img/69cd31f2e807e.jpg"; then echo "OK  69cd31f2e807e.jpg"; ok=$((ok+1)); else echo "FALHOU  69cd31f2e807e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69cd31f2e807e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69c6cbd3e9e0a.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69c6cbd3e9e0a.jpeg" -o "assets/img/69c6cbd3e9e0a.jpg"; then echo "OK  69c6cbd3e9e0a.jpg"; ok=$((ok+1)); else echo "FALHOU  69c6cbd3e9e0a.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69c6cbd3e9e0a.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6941af17a34ae.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/6941af17a34ae.jpeg.webp" -o "assets/img/6941af17a34ae.webp"; then echo "OK  6941af17a34ae.webp"; ok=$((ok+1)); else echo "FALHOU  6941af17a34ae.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  6941af17a34ae.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68d54b3859a27.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/68d54b3859a27.jpeg.webp" -o "assets/img/68d54b3859a27.webp"; then echo "OK  68d54b3859a27.webp"; ok=$((ok+1)); else echo "FALHOU  68d54b3859a27.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  68d54b3859a27.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/689e0449e58eb.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/689e0449e58eb.jpeg.webp" -o "assets/img/689e0449e58eb.webp"; then echo "OK  689e0449e58eb.webp"; ok=$((ok+1)); else echo "FALHOU  689e0449e58eb.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  689e0449e58eb.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/687fce7908a6b.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/687fce7908a6b.jpeg.webp" -o "assets/img/687fce7908a6b.webp"; then echo "OK  687fce7908a6b.webp"; ok=$((ok+1)); else echo "FALHOU  687fce7908a6b.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  687fce7908a6b.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/681270e476552.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/681270e476552.jpeg.webp" -o "assets/img/681270e476552.webp"; then echo "OK  681270e476552.webp"; ok=$((ok+1)); else echo "FALHOU  681270e476552.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  681270e476552.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67c9bb96a9943.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/67c9bb96a9943.jpeg.webp" -o "assets/img/67c9bb96a9943.webp"; then echo "OK  67c9bb96a9943.webp"; ok=$((ok+1)); else echo "FALHOU  67c9bb96a9943.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  67c9bb96a9943.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67a378fd33033.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/67a378fd33033.jpeg.webp" -o "assets/img/67a378fd33033.webp"; then echo "OK  67a378fd33033.webp"; ok=$((ok+1)); else echo "FALHOU  67a378fd33033.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  67a378fd33033.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/676197655ace7.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/676197655ace7.jpeg.webp" -o "assets/img/676197655ace7.webp"; then echo "OK  676197655ace7.webp"; ok=$((ok+1)); else echo "FALHOU  676197655ace7.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  676197655ace7.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6751c1adc6b13.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/6751c1adc6b13.jpeg.webp" -o "assets/img/6751c1adc6b13.webp"; then echo "OK  6751c1adc6b13.webp"; ok=$((ok+1)); else echo "FALHOU  6751c1adc6b13.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  6751c1adc6b13.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66f4789554414.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66f4789554414.jpeg" -o "assets/img/66f4789554414.jpg"; then echo "OK  66f4789554414.jpg"; ok=$((ok+1)); else echo "FALHOU  66f4789554414.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66f4789554414.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66ce0df34efcc.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/66ce0df34efcc.jpeg.webp" -o "assets/img/66ce0df34efcc.webp"; then echo "OK  66ce0df34efcc.webp"; ok=$((ok+1)); else echo "FALHOU  66ce0df34efcc.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  66ce0df34efcc.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/669fc67cf143c.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/669fc67cf143c.jpeg.webp" -o "assets/img/669fc67cf143c.webp"; then echo "OK  669fc67cf143c.webp"; ok=$((ok+1)); else echo "FALHOU  669fc67cf143c.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  669fc67cf143c.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/65d781ddb24e9.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/65d781ddb24e9.jpeg.webp" -o "assets/img/65d781ddb24e9.webp"; then echo "OK  65d781ddb24e9.webp"; ok=$((ok+1)); else echo "FALHOU  65d781ddb24e9.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  65d781ddb24e9.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69cac95fcb446.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/69cac95fcb446.jpeg.webp" -o "assets/img/69cac95fcb446.webp"; then echo "OK  69cac95fcb446.webp"; ok=$((ok+1)); else echo "FALHOU  69cac95fcb446.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  69cac95fcb446.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69cac9d0a6806.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69cac9d0a6806.jpeg" -o "assets/img/69cac9d0a6806.jpg"; then echo "OK  69cac9d0a6806.jpg"; ok=$((ok+1)); else echo "FALHOU  69cac9d0a6806.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69cac9d0a6806.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69caca12aab2e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69caca12aab2e.jpeg" -o "assets/img/69caca12aab2e.jpg"; then echo "OK  69caca12aab2e.jpg"; ok=$((ok+1)); else echo "FALHOU  69caca12aab2e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69caca12aab2e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69caca2a746e0.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69caca2a746e0.jpeg" -o "assets/img/69caca2a746e0.jpg"; then echo "OK  69caca2a746e0.jpg"; ok=$((ok+1)); else echo "FALHOU  69caca2a746e0.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69caca2a746e0.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69caca3ddd473.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69caca3ddd473.jpeg" -o "assets/img/69caca3ddd473.jpg"; then echo "OK  69caca3ddd473.jpg"; ok=$((ok+1)); else echo "FALHOU  69caca3ddd473.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69caca3ddd473.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69ca99f147c29.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69ca99f147c29.jpeg" -o "assets/img/69ca99f147c29.jpg"; then echo "OK  69ca99f147c29.jpg"; ok=$((ok+1)); else echo "FALHOU  69ca99f147c29.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69ca99f147c29.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69ca9a0f9b577.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69ca9a0f9b577.jpeg" -o "assets/img/69ca9a0f9b577.jpg"; then echo "OK  69ca9a0f9b577.jpg"; ok=$((ok+1)); else echo "FALHOU  69ca9a0f9b577.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69ca9a0f9b577.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69ca9a24d845c.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69ca9a24d845c.jpeg" -o "assets/img/69ca9a24d845c.jpg"; then echo "OK  69ca9a24d845c.jpg"; ok=$((ok+1)); else echo "FALHOU  69ca9a24d845c.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69ca9a24d845c.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69ca9a3c0a18a.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69ca9a3c0a18a.jpeg" -o "assets/img/69ca9a3c0a18a.jpg"; then echo "OK  69ca9a3c0a18a.jpg"; ok=$((ok+1)); else echo "FALHOU  69ca9a3c0a18a.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69ca9a3c0a18a.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/69ca9a50abed4.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/69ca9a50abed4.jpeg" -o "assets/img/69ca9a50abed4.jpg"; then echo "OK  69ca9a50abed4.jpg"; ok=$((ok+1)); else echo "FALHOU  69ca9a50abed4.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  69ca9a50abed4.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6941af212d3d6.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6941af212d3d6.jpeg" -o "assets/img/6941af212d3d6.jpg"; then echo "OK  6941af212d3d6.jpg"; ok=$((ok+1)); else echo "FALHOU  6941af212d3d6.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6941af212d3d6.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6941af30764d1.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6941af30764d1.jpeg" -o "assets/img/6941af30764d1.jpg"; then echo "OK  6941af30764d1.jpg"; ok=$((ok+1)); else echo "FALHOU  6941af30764d1.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6941af30764d1.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6941af47e80cd.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6941af47e80cd.jpeg" -o "assets/img/6941af47e80cd.jpg"; then echo "OK  6941af47e80cd.jpg"; ok=$((ok+1)); else echo "FALHOU  6941af47e80cd.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6941af47e80cd.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6941af89144f2.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6941af89144f2.jpeg" -o "assets/img/6941af89144f2.jpg"; then echo "OK  6941af89144f2.jpg"; ok=$((ok+1)); else echo "FALHOU  6941af89144f2.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6941af89144f2.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6941af9d502d0.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6941af9d502d0.jpeg" -o "assets/img/6941af9d502d0.jpg"; then echo "OK  6941af9d502d0.jpg"; ok=$((ok+1)); else echo "FALHOU  6941af9d502d0.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6941af9d502d0.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68d54b5a3b174.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/68d54b5a3b174.jpeg" -o "assets/img/68d54b5a3b174.jpg"; then echo "OK  68d54b5a3b174.jpg"; ok=$((ok+1)); else echo "FALHOU  68d54b5a3b174.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  68d54b5a3b174.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68d54b709df01.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/68d54b709df01.jpeg" -o "assets/img/68d54b709df01.jpg"; then echo "OK  68d54b709df01.jpg"; ok=$((ok+1)); else echo "FALHOU  68d54b709df01.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  68d54b709df01.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68d54b90e439e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/68d54b90e439e.jpeg" -o "assets/img/68d54b90e439e.jpg"; then echo "OK  68d54b90e439e.jpg"; ok=$((ok+1)); else echo "FALHOU  68d54b90e439e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  68d54b90e439e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68d54b9cd5467.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/68d54b9cd5467.jpeg" -o "assets/img/68d54b9cd5467.jpg"; then echo "OK  68d54b9cd5467.jpg"; ok=$((ok+1)); else echo "FALHOU  68d54b9cd5467.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  68d54b9cd5467.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68d54ba888a01.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/68d54ba888a01.jpeg" -o "assets/img/68d54ba888a01.jpg"; then echo "OK  68d54ba888a01.jpg"; ok=$((ok+1)); else echo "FALHOU  68d54ba888a01.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  68d54ba888a01.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/689e0468e3494.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/689e0468e3494.jpeg" -o "assets/img/689e0468e3494.jpg"; then echo "OK  689e0468e3494.jpg"; ok=$((ok+1)); else echo "FALHOU  689e0468e3494.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  689e0468e3494.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/689e0485e0377.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/689e0485e0377.jpeg" -o "assets/img/689e0485e0377.jpg"; then echo "OK  689e0485e0377.jpg"; ok=$((ok+1)); else echo "FALHOU  689e0485e0377.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  689e0485e0377.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/689e053396ec2.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/689e053396ec2.jpeg" -o "assets/img/689e053396ec2.jpg"; then echo "OK  689e053396ec2.jpg"; ok=$((ok+1)); else echo "FALHOU  689e053396ec2.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  689e053396ec2.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/689e05614d9e8.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/689e05614d9e8.jpeg" -o "assets/img/689e05614d9e8.jpg"; then echo "OK  689e05614d9e8.jpg"; ok=$((ok+1)); else echo "FALHOU  689e05614d9e8.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  689e05614d9e8.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/689e05b50e895.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/689e05b50e895.jpeg" -o "assets/img/689e05b50e895.jpg"; then echo "OK  689e05b50e895.jpg"; ok=$((ok+1)); else echo "FALHOU  689e05b50e895.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  689e05b50e895.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/687fce87adec0.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/687fce87adec0.jpeg" -o "assets/img/687fce87adec0.jpg"; then echo "OK  687fce87adec0.jpg"; ok=$((ok+1)); else echo "FALHOU  687fce87adec0.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  687fce87adec0.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/687fce9c1483e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/687fce9c1483e.jpeg" -o "assets/img/687fce9c1483e.jpg"; then echo "OK  687fce9c1483e.jpg"; ok=$((ok+1)); else echo "FALHOU  687fce9c1483e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  687fce9c1483e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/687fceb09dcde.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/687fceb09dcde.jpeg" -o "assets/img/687fceb09dcde.jpg"; then echo "OK  687fceb09dcde.jpg"; ok=$((ok+1)); else echo "FALHOU  687fceb09dcde.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  687fceb09dcde.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/687fcf5ab4708.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/687fcf5ab4708.jpeg" -o "assets/img/687fcf5ab4708.jpg"; then echo "OK  687fcf5ab4708.jpg"; ok=$((ok+1)); else echo "FALHOU  687fcf5ab4708.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  687fcf5ab4708.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/687fcf761eafa.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/687fcf761eafa.jpeg" -o "assets/img/687fcf761eafa.jpg"; then echo "OK  687fcf761eafa.jpg"; ok=$((ok+1)); else echo "FALHOU  687fcf761eafa.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  687fcf761eafa.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6812710a0829e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6812710a0829e.jpeg" -o "assets/img/6812710a0829e.jpg"; then echo "OK  6812710a0829e.jpg"; ok=$((ok+1)); else echo "FALHOU  6812710a0829e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6812710a0829e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/68127283b0d46.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/68127283b0d46.jpeg" -o "assets/img/68127283b0d46.jpg"; then echo "OK  68127283b0d46.jpg"; ok=$((ok+1)); else echo "FALHOU  68127283b0d46.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  68127283b0d46.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/681273efcd200.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/681273efcd200.jpeg" -o "assets/img/681273efcd200.jpg"; then echo "OK  681273efcd200.jpg"; ok=$((ok+1)); else echo "FALHOU  681273efcd200.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  681273efcd200.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6812713176b8b.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6812713176b8b.jpeg" -o "assets/img/6812713176b8b.jpg"; then echo "OK  6812713176b8b.jpg"; ok=$((ok+1)); else echo "FALHOU  6812713176b8b.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6812713176b8b.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/681273be9fbe9.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/681273be9fbe9.jpeg" -o "assets/img/681273be9fbe9.jpg"; then echo "OK  681273be9fbe9.jpg"; ok=$((ok+1)); else echo "FALHOU  681273be9fbe9.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  681273be9fbe9.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67c9bba82326a.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67c9bba82326a.jpeg" -o "assets/img/67c9bba82326a.jpg"; then echo "OK  67c9bba82326a.jpg"; ok=$((ok+1)); else echo "FALHOU  67c9bba82326a.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67c9bba82326a.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67c9bbb709757.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67c9bbb709757.jpeg" -o "assets/img/67c9bbb709757.jpg"; then echo "OK  67c9bbb709757.jpg"; ok=$((ok+1)); else echo "FALHOU  67c9bbb709757.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67c9bbb709757.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67c9bbc7e0f16.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67c9bbc7e0f16.jpeg" -o "assets/img/67c9bbc7e0f16.jpg"; then echo "OK  67c9bbc7e0f16.jpg"; ok=$((ok+1)); else echo "FALHOU  67c9bbc7e0f16.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67c9bbc7e0f16.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67c9bbd631325.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67c9bbd631325.jpeg" -o "assets/img/67c9bbd631325.jpg"; then echo "OK  67c9bbd631325.jpg"; ok=$((ok+1)); else echo "FALHOU  67c9bbd631325.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67c9bbd631325.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67c9bbe724cb7.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67c9bbe724cb7.jpeg" -o "assets/img/67c9bbe724cb7.jpg"; then echo "OK  67c9bbe724cb7.jpg"; ok=$((ok+1)); else echo "FALHOU  67c9bbe724cb7.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67c9bbe724cb7.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67a379089fcbe.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67a379089fcbe.jpeg" -o "assets/img/67a379089fcbe.jpg"; then echo "OK  67a379089fcbe.jpg"; ok=$((ok+1)); else echo "FALHOU  67a379089fcbe.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67a379089fcbe.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67a379123e007.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67a379123e007.jpeg" -o "assets/img/67a379123e007.jpg"; then echo "OK  67a379123e007.jpg"; ok=$((ok+1)); else echo "FALHOU  67a379123e007.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67a379123e007.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67a37924a677f.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67a37924a677f.jpeg" -o "assets/img/67a37924a677f.jpg"; then echo "OK  67a37924a677f.jpg"; ok=$((ok+1)); else echo "FALHOU  67a37924a677f.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67a37924a677f.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67a3792e221ab.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67a3792e221ab.jpeg" -o "assets/img/67a3792e221ab.jpg"; then echo "OK  67a3792e221ab.jpg"; ok=$((ok+1)); else echo "FALHOU  67a3792e221ab.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67a3792e221ab.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67a37940eb63b.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67a37940eb63b.jpeg" -o "assets/img/67a37940eb63b.jpg"; then echo "OK  67a37940eb63b.jpg"; ok=$((ok+1)); else echo "FALHOU  67a37940eb63b.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67a37940eb63b.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/67619772d463e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/67619772d463e.jpeg" -o "assets/img/67619772d463e.jpg"; then echo "OK  67619772d463e.jpg"; ok=$((ok+1)); else echo "FALHOU  67619772d463e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  67619772d463e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6761977e3133e.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6761977e3133e.jpeg" -o "assets/img/6761977e3133e.jpg"; then echo "OK  6761977e3133e.jpg"; ok=$((ok+1)); else echo "FALHOU  6761977e3133e.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6761977e3133e.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6761978ee738b.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6761978ee738b.jpeg" -o "assets/img/6761978ee738b.jpg"; then echo "OK  6761978ee738b.jpg"; ok=$((ok+1)); else echo "FALHOU  6761978ee738b.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6761978ee738b.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6761979a5da9b.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6761979a5da9b.jpeg" -o "assets/img/6761979a5da9b.jpg"; then echo "OK  6761979a5da9b.jpg"; ok=$((ok+1)); else echo "FALHOU  6761979a5da9b.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6761979a5da9b.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/676197a854061.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/676197a854061.jpeg" -o "assets/img/676197a854061.jpg"; then echo "OK  676197a854061.jpg"; ok=$((ok+1)); else echo "FALHOU  676197a854061.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  676197a854061.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6751c1ce8683a.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6751c1ce8683a.jpeg" -o "assets/img/6751c1ce8683a.jpg"; then echo "OK  6751c1ce8683a.jpg"; ok=$((ok+1)); else echo "FALHOU  6751c1ce8683a.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6751c1ce8683a.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6751c1dfd8813.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6751c1dfd8813.jpeg" -o "assets/img/6751c1dfd8813.jpg"; then echo "OK  6751c1dfd8813.jpg"; ok=$((ok+1)); else echo "FALHOU  6751c1dfd8813.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6751c1dfd8813.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6751c204cbeb0.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6751c204cbeb0.jpeg" -o "assets/img/6751c204cbeb0.jpg"; then echo "OK  6751c204cbeb0.jpg"; ok=$((ok+1)); else echo "FALHOU  6751c204cbeb0.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6751c204cbeb0.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6751c21db5a7a.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6751c21db5a7a.jpeg" -o "assets/img/6751c21db5a7a.jpg"; then echo "OK  6751c21db5a7a.jpg"; ok=$((ok+1)); else echo "FALHOU  6751c21db5a7a.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6751c21db5a7a.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/6751c234230b1.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/6751c234230b1.jpeg" -o "assets/img/6751c234230b1.jpg"; then echo "OK  6751c234230b1.jpg"; ok=$((ok+1)); else echo "FALHOU  6751c234230b1.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  6751c234230b1.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66f478aa7a562.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66f478aa7a562.jpeg" -o "assets/img/66f478aa7a562.jpg"; then echo "OK  66f478aa7a562.jpg"; ok=$((ok+1)); else echo "FALHOU  66f478aa7a562.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66f478aa7a562.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66f478b92de79.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66f478b92de79.jpeg" -o "assets/img/66f478b92de79.jpg"; then echo "OK  66f478b92de79.jpg"; ok=$((ok+1)); else echo "FALHOU  66f478b92de79.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66f478b92de79.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66f478c9e64a2.webp" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images_webp/products/gallery/66f478c9e64a2.jpeg.webp" -o "assets/img/66f478c9e64a2.webp"; then echo "OK  66f478c9e64a2.webp"; ok=$((ok+1)); else echo "FALHOU  66f478c9e64a2.webp"; fail=$((fail+1)); fi
else echo "JA EXISTE  66f478c9e64a2.webp"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66f478e3ce148.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66f478e3ce148.jpeg" -o "assets/img/66f478e3ce148.jpg"; then echo "OK  66f478e3ce148.jpg"; ok=$((ok+1)); else echo "FALHOU  66f478e3ce148.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66f478e3ce148.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66f478f526c31.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66f478f526c31.jpeg" -o "assets/img/66f478f526c31.jpg"; then echo "OK  66f478f526c31.jpg"; ok=$((ok+1)); else echo "FALHOU  66f478f526c31.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66f478f526c31.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66ce0e00966f6.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66ce0e00966f6.jpeg" -o "assets/img/66ce0e00966f6.jpg"; then echo "OK  66ce0e00966f6.jpg"; ok=$((ok+1)); else echo "FALHOU  66ce0e00966f6.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66ce0e00966f6.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66ce0e1d3b330.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66ce0e1d3b330.jpeg" -o "assets/img/66ce0e1d3b330.jpg"; then echo "OK  66ce0e1d3b330.jpg"; ok=$((ok+1)); else echo "FALHOU  66ce0e1d3b330.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66ce0e1d3b330.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66ce0e2ce9949.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66ce0e2ce9949.jpeg" -o "assets/img/66ce0e2ce9949.jpg"; then echo "OK  66ce0e2ce9949.jpg"; ok=$((ok+1)); else echo "FALHOU  66ce0e2ce9949.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66ce0e2ce9949.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66ce0e3b6f648.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66ce0e3b6f648.jpeg" -o "assets/img/66ce0e3b6f648.jpg"; then echo "OK  66ce0e3b6f648.jpg"; ok=$((ok+1)); else echo "FALHOU  66ce0e3b6f648.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66ce0e3b6f648.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/66ce0e47d77b7.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/66ce0e47d77b7.jpeg" -o "assets/img/66ce0e47d77b7.jpg"; then echo "OK  66ce0e47d77b7.jpg"; ok=$((ok+1)); else echo "FALHOU  66ce0e47d77b7.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  66ce0e47d77b7.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/669fc68d173d1.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/669fc68d173d1.jpeg" -o "assets/img/669fc68d173d1.jpg"; then echo "OK  669fc68d173d1.jpg"; ok=$((ok+1)); else echo "FALHOU  669fc68d173d1.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  669fc68d173d1.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/669fc6b62f9d1.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/669fc6b62f9d1.jpeg" -o "assets/img/669fc6b62f9d1.jpg"; then echo "OK  669fc6b62f9d1.jpg"; ok=$((ok+1)); else echo "FALHOU  669fc6b62f9d1.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  669fc6b62f9d1.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/669fc6d3ee677.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/669fc6d3ee677.jpeg" -o "assets/img/669fc6d3ee677.jpg"; then echo "OK  669fc6d3ee677.jpg"; ok=$((ok+1)); else echo "FALHOU  669fc6d3ee677.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  669fc6d3ee677.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/669fc6e86c38f.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/669fc6e86c38f.jpeg" -o "assets/img/669fc6e86c38f.jpg"; then echo "OK  669fc6e86c38f.jpg"; ok=$((ok+1)); else echo "FALHOU  669fc6e86c38f.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  669fc6e86c38f.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/669fc6f7c707a.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/669fc6f7c707a.jpeg" -o "assets/img/669fc6f7c707a.jpg"; then echo "OK  669fc6f7c707a.jpg"; ok=$((ok+1)); else echo "FALHOU  669fc6f7c707a.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  669fc6f7c707a.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/65d781ed9c145.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/65d781ed9c145.jpeg" -o "assets/img/65d781ed9c145.jpg"; then echo "OK  65d781ed9c145.jpg"; ok=$((ok+1)); else echo "FALHOU  65d781ed9c145.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  65d781ed9c145.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/65d7820243990.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/65d7820243990.jpeg" -o "assets/img/65d7820243990.jpg"; then echo "OK  65d7820243990.jpg"; ok=$((ok+1)); else echo "FALHOU  65d7820243990.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  65d7820243990.jpg"; ok=$((ok+1)); fi
if [ ! -s "assets/img/65d78216ac9b4.jpg" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "https://cury.net/storage/images/products/gallery/65d78216ac9b4.jpeg" -o "assets/img/65d78216ac9b4.jpg"; then echo "OK  65d78216ac9b4.jpg"; ok=$((ok+1)); else echo "FALHOU  65d78216ac9b4.jpg"; fail=$((fail+1)); fi
else echo "JA EXISTE  65d78216ac9b4.jpg"; ok=$((ok+1)); fi
echo ""
echo "Concluído: $ok baixadas/existentes, $fail falharam de 88."