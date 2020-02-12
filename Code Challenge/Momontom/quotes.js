const quotes={
    1: `Nothing is as far away as one minute ago (Jim Bishop)`,
    2: `Regret for wasted time is more wasted time. (Mason Cooley)`,
    3: `So little time and so little to do. (Oscar Levant)`,
    4:  ` Time is an illusion. Lunchtime doubly so. (Douglas Adams)`,
    5:  `Employ thy time well, if thou meanest to get leisure. (Benjamin Franklin) `,
    6:  ` Punctuality is the soul of business. (Thomas Halyburton) `,
    7: `The future ain't what it used to be. (Yogi Berra)`,
    8:  `Doing a thing well is often a waste of time. (Robert Byrne)`,
    9: `The future will be better tomorrow. (Dan Quayle)`,
    10: `Time is the most valuable thing a man can spend. (Theophrastus)`,
    11: `Time does not change us. It just unfolds us. (Max Frisch)`,
    12: `There is never enough time, unless you're serving it. (Malcolm Forbes)`,
    13: `You may delay, but time will not. (Benjamin Franklin)`,
    14: `If you judge people, you have no time to love them. (Mother Teresa)`,
    15: `We must use time as a tool, not as a crutch. (John F. Kennedy)`,
    16: `Early morning hath gold in its mouth. (Benjamin Franklin)`,
    17: `I have seen the future and it doesn't work. (Robert Fulford)`,
    18: `I may lose land...but I never lose a minute. (Napoleon Bonaparte)`,
    19: `An unhurried sense of time is in itself a form of wealth. (Bonnie Friedman)`,
    20: `People find life entirely too time-consuming. (Stanislaw J. Lec)`,
    21: `I wasted time, and now doth time waste me. (William Shakespeare)`,
    22:  `The empires of the future are the empires of the mind. (Sir Winston Churchill)`,
    23: `Fish and visitors smell in three days. (Benjamin Franklin)`,
    24: `Nothing is a waste of time if you use the experience wisely. (Auguste Rodin)`,
    25: `If time flies when you're having fun, it hits the afterburners when you don't think you're having enough. (Jef Mallett)`,
    26: `The time to repair the roof is when the sun is shining. (John F. Kennedy)`,
    27: `The future is much like the present, only longer. (Dan Quisenberry)`,
    28: `In the future everyone will be famous for 15 minutes. (Andy Warhol)`,
    29: `A single day is enough to make us a little larger. (Paul Klee)`,
    30: `The future depends on what we do in the present. (Mahatma Gandhi)`
};

const qut= document.querySelector(".quote");
let ran=Math.random()*30
const num= Math.floor(ran+1);
qut.innerHTML= quotes[num];

