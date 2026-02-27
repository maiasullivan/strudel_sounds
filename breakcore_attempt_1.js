fetch('https://github.com/switchangel/strudel-scripts/blob/main/prebake.strudel')
// Shoutout Switch Angel <3

const dbank = "tr909"
let a = slider(1, 1.0, 2.5)
let b = slider(16000, 800, 16000)
let c = slider(0, 0, 1)      // bass density: 0 = full kicks, 1 = sparse kicks
let d = slider(1, 0, 1)


let inv = sub(1, a.mul(0.5)) 
setCps(140/60/4)

stack(
 stack(
  s("hh*16")
  .bank(dbank)
  .gain(perlin.fast(2).range(0.2, 0.5))
  .pan(sine.fast(3).range(-0.4, 0.4))
  .decay(sine.fast(2).range(0.03, 0.12))
  .every(4, x => x.fast(1.5)),

  s("oh:0 ~ ~ oh:0 ~ ~ oh:0 ~".fast(2))
  .bank(dbank)
  .gain(.35)
  .decay(0.18)
  .sometimesBy(0.15, x => x.speed("0.8 | 1.2")),

  s("white!16")
  .decay(sine.fast(6).range(0.02, 0.18))
  .gain(.3)
  .hpf(perlin.fast(1.5).range(2000, 8000))
  .sometimesBy(.12, x => x.ply("2 | 8")),

  stack(
    s("bd!16")
    .degradeBy(c)       
    .ribbon(32, 2)
    .bank(dbank)
    .n(irand(3).ribbon(150, 2))
    .speed(perlin.fast(0.5).range(0.9, 1.1))
    .every(8, x => x.beat("0,2,3,5,10,14", 16))
    .beat("0,4,8,11", 16),

    s("sd")
    .bank(dbank)
    .beat("4,12", 16)
  )
  .dist(a)
  .gain(inv.range(0.4, 0.9)),

  s("sd:1!16?")
  .degradeBy(0.78)
  .bank(dbank)
  .gain(perlin.fast(4).range(0.15, 0.35))
  .speed("0.7 | 0.85 | 1.1")
  .ribbon(24, 3),

  s("cp:2!16?")
  .ribbon(20, 2)
  .bank(dbank)
  .gain(.25)
  .delay(".2 | .3")
  .delaytime("0.04 | 0.07")
  .delayfeedback(0.2)

 ).punchcard()
 .lpf(b),

 stack(
   n("[1 <5 4> 3 7 <4 5>]*2").scale("c:major").sound("square").dist(0.5).lpf("<1000 2500 5000>").delay(0.4).acidenv(d).gain(0.4),
   chord("<C G D D>").voicing().sound("saw").lpf(2000).gain(0.35)
 )
)

