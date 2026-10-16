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

# Estrutura perfeita com logos individuais para cada colaborador:
# 1. Foto: X=0, Y=0, W=148, H=152 (slice_avatar_$k.png)
# 2. Centro:
#    - Nome/Cargo: X=148, Y=0, W=260, H=57 (slice_name_$k.png) - Anderson termina em 405 (148+260 = 408px, 100% completo!)
#    - Facebook: X=148, Y=57, W=260, H=31 (slice_fb.png)
#    - WhatsApp: X=148, Y=88, W=260, H=32 (slice_wa_$k.png)
#    - Instagram: X=148, Y=120, W=260, H=32 (slice_ig.png)
# 3. Direita:
#    - Logo Via Design: X=408, Y=0, W=160, H=88 (slice_logo_$k.png cortado da arte do próprio colaborador - 100% limpo, sem nenhuma letra!)
#    - Telefone 3305-8370: X=408, Y=88, W=160, H=64 (slice_phone.png)
# 4. Endereço base: X=0, Y=152, W=568, H=33 (slice_address.png)

Write-Output "Recortando fatias compartilhadas..."
$baseImg = Join-Path $PSScriptRoot "assinatura-tiago.png"
Crop-Image $baseImg (Join-Path $slicesDir "slice_fb.png") 148 57 260 31
Crop-Image $baseImg (Join-Path $slicesDir "slice_ig.png") 148 120 260 32
Crop-Image $baseImg (Join-Path $slicesDir "slice_phone.png") 408 88 160 64
Crop-Image $baseImg (Join-Path $slicesDir "slice_address.png") 0 152 568 33

Write-Output "Recortando fatias individuais..."
foreach ($k in $keys) {
    $src = Join-Path $PSScriptRoot "assinatura-$k.png"
    Crop-Image $src (Join-Path $slicesDir "slice_avatar_$k.png") 0 0 148 152
    Crop-Image $src (Join-Path $slicesDir "slice_name_$k.png") 148 0 260 57
    Crop-Image $src (Join-Path $slicesDir "slice_wa_$k.png") 148 88 260 32
    Crop-Image $src (Join-Path $slicesDir "slice_logo_$k.png") 408 0 160 88
}

Write-Output "Todas as fatias foram geradas perfeitamente!"
