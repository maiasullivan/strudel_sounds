// Harmonious ambient shambient song
// By maia_sullivan
//
// For best effects: slowlyyyyy increase the slider
// Paste `document.querySelectorAll("canvas").forEach(c => c.style.opacity = “0.3` into browser console to see code above the visuals

setcpm(30)
let a =(slider(1, 0.7, 1.0))
stack(
  stack(
     s("bd bd bd [bd bd/2]").bank("concertmatemg1").delay("1.5").gain(a),
     n("[1 4 5 2], [3*16]").scale("g:minor").sound("wind").trans(-24).lpf(a.mul(300).add(500)).room(.2),
     s("<hh hh hh -/2 bd/4>*16").delay("1 2").lpf("1500 2000 20000"),
  ),
 stack(
    n("0,3,7, 13/4").gain(a.mul(0.5)),
    n("<9 - 4 ->").sustain("<2 - 2 ->").gain(a.mul(0.9))
  ).scale("e:minor").s("sawtooth").lpf(a.mul(10667).add(-6667)).ph("<1 2 4 3>").delay(.5).room(1.5),
 s("sd [sd sd*2] sd sd").bank("tr505").delay(".4").lpf(a.mul(10667).add(-6667))
).punchcard()