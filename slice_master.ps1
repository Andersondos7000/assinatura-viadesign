Add-Type -AssemblyName System.Drawing

function Crop-Image($srcPath, $dstPath, $x, $y, $w, $h) {
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $dst = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $dst.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $dst.Dispose()
    $src.Dispose()
}

$slicesDir = Join-Path $PSScriptRoot "slices"
if (!(Test-Path $slicesDir)) {
    New-Item -ItemType Directory -Path $slicesDir | Out-Null
}

$keys = @("anderson", "daniel", "fernandes", "tiago")

# Estrutura de fatiamento da imagem de 568x185:
#
# Altura total: 185px
# Linha 1 (Topo): Y=0 até Y=152 (altura 152px)
#   - Coluna 1 (Avatar + Nome/Cargo): X=0, Y=0, W=380, H=57 -> slice_topleft.png
#   - Coluna 2 (Logo Via Design): X=380, Y=0, W=188, H=88 -> slice_logo.png (comum para todos)
#
# Mas espere: na coluna central nós temos os botões de redes sociais:
# Redes Sociais ficam entre X=0 até X=380, Y=57 até 152:
#   - Linha Facebook: X=148, Y=57, W=232, H=31 -> slice_fb.png
#   - Linha WhatsApp: X=148, Y=88, W=232, H=32 -> slice_wa.png
#   - Linha Instagram: X=148, Y=120, W=232, H=32 -> slice_ig.png
#
# Para não fragmentar complexamente de forma que quebre no Gmail, vamos analisar as colunas verticais exatas:
#
# COLUNA 1 (Esquerda - Foto do colaborador):
# X=0, Y=0, W=148, H=152 -> slice_avatar_${key}.png
# Link: WhatsApp do colaborador
#
# COLUNA 2 (Centro - Dados do colaborador e redes):
#   - Linha Nome/Cargo: X=148, Y=0, W=232, H=57 -> slice_name_${key}.png
#     Link: WhatsApp do colaborador
#   - Linha Facebook: X=148, Y=57, W=232, H=31 -> slice_fb.png (comum para todos)
#     Link: Facebook Via Design
#   - Linha WhatsApp: X=148, Y=88, W=232, H=32 -> slice_wa_${key}.png
#     Link: WhatsApp do colaborador
#   - Linha Instagram: X=148, Y=120, W=232, H=32 -> slice_ig.png (comum para todos)
#     Link: Instagram Via Design
#
# COLUNA 3 (Direita - Logo Via Design e Telefone da Fábrica):
#   - Linha Logo: X=380, Y=0, W=188, H=88 -> slice_logo.png (comum para todos)
#     Link: https://viadesign.com.br
#   - Linha Telefone (3305-8370): X=380, Y=88, W=188, H=64 -> slice_phone.png (comum para todos)
#     Link: tel:551833058370
#
# LINHA INFERIOR (Barra preta com endereço completo e fita vermelha):
# X=0, Y=152, W=568, H=33 -> slice_address.png (comum para todos)
# Link: Google Maps da Via Design

Write-Output "Recortando fatias compartilhadas..."
$baseImg = Join-Path $PSScriptRoot "assinatura-anderson.png"
Crop-Image $baseImg (Join-Path $slicesDir "slice_fb.png") 148 57 232 31
Crop-Image $baseImg (Join-Path $slicesDir "slice_ig.png") 148 120 232 32
Crop-Image $baseImg (Join-Path $slicesDir "slice_logo.png") 380 0 188 88
Crop-Image $baseImg (Join-Path $slicesDir "slice_phone.png") 380 88 188 64
Crop-Image $baseImg (Join-Path $slicesDir "slice_address.png") 0 152 568 33

Write-Output "Recortando fatias individuais para cada colaborador..."
foreach ($k in $keys) {
    $src = Join-Path $PSScriptRoot "assinatura-$k.png"
    Crop-Image $src (Join-Path $slicesDir "slice_avatar_$k.png") 0 0 148 152
    Crop-Image $src (Join-Path $slicesDir "slice_name_$k.png") 148 0 232 57
    Crop-Image $src (Join-Path $slicesDir "slice_wa_$k.png") 148 88 232 32
}

Write-Output "Todas as fatias foram geradas com sucesso!"
