# Rename project images to 1.webp, 2.webp, ... in order. Run from repo root.
$base = "E:\Projects\portfolio-new\portfolio-new\public\images\projects"

function Rename-FolderImages {
    param([string]$folder, [string[]]$orderedNames)
    $path = Join-Path $base $folder
    if (-not (Test-Path $path)) { Write-Host "Skip $folder (not found)"; return }
    # Phase 1: rename to temp (avoid overwrite)
    for ($i = 0; $i -lt $orderedNames.Length; $i++) {
        $oldName = $orderedNames[$i]
        $fullOld = Join-Path $path $oldName
        if (Test-Path $fullOld) {
            Rename-Item -LiteralPath $fullOld -NewName "__$($i+1).webp" -ErrorAction SilentlyContinue
        }
    }
    # Phase 2: rename temp to final
    for ($i = 0; $i -lt $orderedNames.Length; $i++) {
        $tempName = "__$($i+1).webp"
        $fullTemp = Join-Path $path $tempName
        if (Test-Path $fullTemp) {
            Rename-Item -LiteralPath $fullTemp -NewName "$($i+1).webp" -ErrorAction SilentlyContinue
        }
    }
    Write-Host "Done $folder"
}

# LMP (16 files in order - match folder)
$lmp = @(
    "Screenshot 2026-03-09 101710.webp","Screenshot 2026-03-09 101724.webp","Screenshot 2026-03-09 101807.webp","Screenshot 2026-03-09 101816.webp",
    "Screenshot 2026-03-09 101851.webp","Screenshot 2026-03-09 101905.webp","Screenshot 2026-03-09 101937.webp","Screenshot 2026-03-09 101947.webp",
    "Screenshot 2026-03-09 102112.webp","Screenshot 2026-03-09 102138.webp","Screenshot 2026-03-09 102337.webp","Screenshot 2026-03-09 102355.webp",
    "Screenshot 2026-03-09 102430.webp","Screenshot 2026-03-09 102440.webp","Screenshot 2026-03-09 102504.webp","Screenshot 2026-03-09 102518.webp",
    "Screenshot 2026-03-09 102552.webp","Screenshot 2026-03-09 102601.webp"
)
Rename-FolderImages "lmp" $lmp

# LMP-app (28 files)
$lmpApp = @(
    "WhatsApp Image 2026-03-09 at 10.28.56 AM.webp","WhatsApp Image 2026-03-09 at 10.28.57 AM (1).webp","WhatsApp Image 2026-03-09 at 10.28.57 AM (2).webp","WhatsApp Image 2026-03-09 at 10.28.57 AM.webp",
    "WhatsApp Image 2026-03-09 at 10.28.58 AM (1).webp","WhatsApp Image 2026-03-09 at 10.28.58 AM (2).webp","WhatsApp Image 2026-03-09 at 10.28.58 AM.webp","WhatsApp Image 2026-03-09 at 10.28.59 AM (1).webp",
    "WhatsApp Image 2026-03-09 at 10.28.59 AM (2).webp","WhatsApp Image 2026-03-09 at 10.28.59 AM.webp","WhatsApp Image 2026-03-09 at 10.29.00 AM (1).webp","WhatsApp Image 2026-03-09 at 10.29.00 AM (2).webp",
    "WhatsApp Image 2026-03-09 at 10.29.00 AM.webp","WhatsApp Image 2026-03-09 at 10.29.01 AM (1).webp","WhatsApp Image 2026-03-09 at 10.29.01 AM (2).webp","WhatsApp Image 2026-03-09 at 10.29.01 AM.webp",
    "WhatsApp Image 2026-03-09 at 10.29.02 AM (1).webp","WhatsApp Image 2026-03-09 at 10.29.02 AM (2).webp","WhatsApp Image 2026-03-09 at 10.29.02 AM (3).webp","WhatsApp Image 2026-03-09 at 10.29.02 AM.webp",
    "WhatsApp Image 2026-03-09 at 10.29.03 AM (1).webp","WhatsApp Image 2026-03-09 at 10.29.03 AM (2).webp","WhatsApp Image 2026-03-09 at 10.29.03 AM.webp","WhatsApp Image 2026-03-09 at 10.29.04 AM (1).webp",
    "WhatsApp Image 2026-03-09 at 10.29.04 AM.webp","WhatsApp Image 2026-03-09 at 10.29.05 AM (1).webp","WhatsApp Image 2026-03-09 at 10.29.05 AM (2).webp","WhatsApp Image 2026-03-09 at 10.29.05 AM.webp"
)
Rename-FolderImages "lmp-app" $lmpApp

# serendib (8)
$serendib = @("Landing-page.webp","Our story.webp","Offers.webp","Events.webp","Excursions.webp","Gallery.webp","Blogs.webp","Blogs2.webp")
Rename-FolderImages "serendib" $serendib

# saneck (9)
$saneck = @("HomePage.webp","Products.webp","Individual-Product.webp","Company.webp","Contact.webp","Quote-List.webp","Buyers-Terms-and-Conditions.webp","Privacy-Policy.webp","Cookies-policy.webp")
Rename-FolderImages "saneck" $saneck

# iems (3)
$iems = @("1536w default.webp","Screenshot_26-5-2025_122328_localhost.webp","Screenshot_26-5-2025_122350_localhost.webp")
Rename-FolderImages "iems" $iems

# eyezen-web (3)
$eyezenWeb = @("276386898-885d94b4-1129-40c5-9cdf-04d1174872df.webp","276387034-c3368661-b23e-4575-969c-50439ac975e2.webp","276388625-9342448c-1042-404d-8d9e-8b39fefd8505.webp")
Rename-FolderImages "eyezen-web" $eyezenWeb

# eyezen-mobile (6)
$eyezenMobile = @("278741018-ae8fc32b-d91f-4899-8702-4191f0d909b2.webp","278741054-68173373-9d20-4778-9a6b-90935925cd5d.webp","278741090-7d30d120-10fd-4a1a-8f35-6908ec686f0e.webp","278741102-8cac96e8-78bb-4029-a143-dfcad4cf237c.webp","278741145-db31d1f2-f517-4a14-b40d-703a1340feae.webp","278741159-b69dba78-fffb-4749-8e35-4bb6cf66df16.webp")
Rename-FolderImages "eyezen-mobile" $eyezenMobile

# astronexus (4)
$astronexus = @("327321540-998597a2-7531-4202-9c78-041dc90e7dae.webp","327321619-5f85a66a-1736-4e5f-9a36-a1357bdbe9b1.webp","327321710-df67ca10-b80a-4fb2-8305-412890b6123a.webp","Screenshot_9-3-2026_115229_localhost.webp")
Rename-FolderImages "astronexus" $astronexus

# skillsprint (1)
Rename-FolderImages "skillsprint" @("skillsprint.webp")

# averson (1)
Rename-FolderImages "averson" @("averson.webp")

# kandy-cookery-fe already has 1-6.webp - skip or rename if different names exist
$kandy = @("Screenshot 2026-03-09 111449.webp","Screenshot 2026-03-09 111510.webp","Screenshot 2026-03-09 111520.webp","Screenshot 2026-03-09 111556.webp","Screenshot 2026-03-09 111612.webp","Screenshot 2026-03-09 111630.webp")
# Only run if old names exist
$kandyPath = Join-Path $base "kandy-cookery-fe"
if (Test-Path (Join-Path $kandyPath "Screenshot 2026-03-09 111449.webp")) { Rename-FolderImages "kandy-cookery-fe" $kandy } else { Write-Host "Skip kandy-cookery-fe (already 1-6)" }

# strapi-nextjs-movie-app (4)
$starwars = @("311168332-9804b432-055c-4553-87ee-fafe986e1ca0.webp","311168365-4380f6e8-fa8c-447c-a4c9-46a8c0cddaec.webp","311168420-b8c134e3-4dd1-48e2-b4db-85aa548b8c53.webp","311168485-cbaed35d-a65f-440c-af15-3254e4fb3230.webp")
Rename-FolderImages "strapi-nextjs-movie-app" $starwars

# currency (1)
Rename-FolderImages "currency" @("currency.webp")

# travely (2)
$travely = @("239195467-6363b329-bf0d-4f96-82fe-add9268a8f23.webp","239195537-b20d6154-216b-49f7-bd3a-3ca4d6d6313d.webp")
Rename-FolderImages "travely" $travely

Write-Host "All done."
