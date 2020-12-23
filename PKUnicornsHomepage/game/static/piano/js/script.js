

C = new AudioContext; // audio context
A = [];               // active sounds
I = 0;                // instrument type

// instrument select
[...`∿🎻🎷🎹`].map((i,j)=>                           // instrument icons
    K.innerHTML += i +                                 // icon
    `<input type=radio name=I checked onmousedown=I=${ // radio input
    3 - j}> &nbsp;`);                                  // instrument select

// piano keys
for(i = 0; i < 36; i++) // 3 x 12 keys
        
    document.body.innerHTML +=
        `${i%12 ? `` : `<br>`                                       // new row
        }<div id=K${                                                // create key
            k = 24 + i%12 - (i/12|0)*12                             // reorder keys
        } style='display:inline-block;outline:3px solid #000;background:${ // style
        (w = `02579`.indexOf(i%12 - 1) < 0) ?                       // b or w?
        `#fff;color:#000;width:60px;height:140px` :                 // white
        `#000;position:absolute;margin-left:-15px;width:29px;height:79px` // black
        }'onmouseover=event.buttons&&P(${ k                         // mouse over
        }) onmousedown=P(${ k                                       // mouse down
        }) onmouseup=X(${ k                                         // mouse up
        }) onmouseout=X(${ k                                        // mouse out
        })>` + (w ? `<br>` : ``) +                                  // lower white keys
        `ZSXDCVGBHNJMQ2W3ER5T6Y7UI9O0P[=]    `[k];                  // show key

///////////////////////////////////////////////////////////////////////////////
// sound

// play note
P = i=> i < 0 || A[i] || // is valid and note not playing?
(
    k = eval(`K`+i),            // get key
    k.g = k.style.background,   // save original color 
    k.style.transition = ``,    // unset transition
    k.style.background = `red`, // set key color red
    k.innerHTML,                // force reset transition

    A[i] = [         // instruments
        [...`1248`], // 🎹 organ
        [...`3579`], // 🎷 brass
        [...`123`],  // 🎻 strings
        [...`4`],    // ∿ sine
    ][ I ].map(j=>(
        o = C.createOscillator(),       // create oscillator
        o.connect(                      // oscillator to gain1
            g = C.createGain(           // create start gain node
                o.frequency.value =     // set frequency
                    j * 55 *            // A 55 root note
                    2**((i+3)/12        // music scale formula
                        + O.value*1     // octave control
                        + Y.value/12))) // key control
        .connect(                       // gain1 to gain2
            o.g = C.createGain())       // create end gain node
        .connect(C.destination),        // gain2 to destination
        g.gain.linearRampToValueAtTime( // set start gain off
            g.gain.value = 0,           // set gain to 0
            C.currentTime + .02),       // set start time
        g.gain.linearRampToValueAtTime( // set gain start ramp
            .2/(1+Math.log2(j)),        // scale gain
            C.currentTime + .05),       // ramp on gain
        o.start(),                      // play sound
        o)                              // return sound
    )
);

// cancel note
X = i=> A[i] &&  // is note playing?
(
    k = eval(`K`+i),            // get key
    k.style.transition = `.5s`, // set transition
    k.style.background = k.g,   // reset original color

    A[i].map(j=>
        setTimeout(e=>j.stop(), 350,          // stop sound after delay
            j.g.gain.linearRampToValueAtTime( // set full gain
                1, C.currentTime + .02),      // wait a split second
            j.g.gain.linearRampToValueAtTime( // ramp gain off
                A[i] = 0, C.currentTime + .3) // clear note  
        )
    )
);

// stop all sounds if focus lost
onblur = e=> A.map((e,i)=> X(i));

///////////////////////////////////////////////////////////////////////////////
// keyboard controls

// keyboard key to piano key
T = i=>
    (k = `zsxdcvgbhnjm,l.;/q2w3er5t6y7ui9o0p[=]` // map key to note
    .indexOf(i.key.toLowerCase()),               // find key in string
    k - 5 * (k > 16));                           // remap second row of keys

// play note on key down
onkeydown = i=> P(T(i));

// release note on key up
onkeyup = i=> X(T(i));