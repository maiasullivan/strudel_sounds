// Bass Dohl (drum pattern) by Ahadadream, Skrillex and Raf Saperra
// By maia_sullivan

setcpm(32)

stack(
  // Kick
  sound("bd ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~ ~")
    .bank("RolandTR808")
    .gain(1),

  //  mid percussion grouped 
  sound("[~ ~ [rim, sd, cp] sd [lt, mt] ~ [lt, mt] ~]*2")
    .bank("RolandTR808")
    .gain(0.7),

  // shakers
  sound("sh ~ ~ ~ ~ sh sh sh sh ~ ~ ~ ~ sh sh sh")
    .bank("RolandTR808")
    .gain(0.3),

  // voice
  sound("[crow ~ <crow ~> ~!5]*2")
    .lpf("1800")
    .gain(0.5)
    .tremolo(1)
    .tremolodepth(0.8)
    .tremoloshape("sine")
    .speed("[<1.6 1.55> ~ <1.65 ~> ~!5]*2")

)