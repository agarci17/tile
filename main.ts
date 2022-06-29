let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(2, 4, Kitronik_Zip_Tile.UBitLocations.Visible)
basic.forever(function () {
    tileDisplay.scrollText(
    "......",
    Kitronik_Zip_Tile.TextDirection.Left,
    100,
    Kitronik_Zip_Tile.TextStyle.None,
    Kitronik_Zip_Tile.colors(ZipLedColors.Red),
    Kitronik_Zip_Tile.colors(ZipLedColors.Red)
    )
})
