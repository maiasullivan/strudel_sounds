setcps(16)

$: note(`
<a c e d 
c a g a 
a c e d 
c a g e 
e g a c 
a g e d 
c d e g 
a g a g >`)
  .scale("g:minor")
  .slow(2)
  .octave(1)
  .trans(-12)
  .sound("square")
  .lpf("1200")

$: note("c")
  .detune(rand)
  .scale("g:minor")
  .slow(2)
  .octave(2)
  .trans(-24)
  .sound("supersaw")
  .gain("0.4")
  .lpf("1000")
  

$: s("bd:2!4")
  .duck("3:4:5:6")
  .duckdepth(.8)
  .duckattack(.16)
  .slow(32)
  ._scope()