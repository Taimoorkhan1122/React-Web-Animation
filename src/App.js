import useWebAnimations from "@wellyshen/use-web-animations";
import { useState, useEffect } from "react";
import "./style.css";

const App = () => {
  const { ref: refAlice, getAnimation } = useWebAnimations({
    playbackRate: 1,
    keyframes: { transform: ["translateY(0)", "translateY(-100%)"] },
    timing: {
      easing: "steps(7, end)",
      duration: 600,
      iterations: Infinity,
      direction: "reverse",
    },
  });

  // scene animations
  // Background animations
  const backAnimation = {
    keyframes: { transform: ["translateX(100%)", "translateX(-100%)"] },
    timing: {
      duration: 36000,
      iterations: Infinity,
    },
  };

  const {
    ref: refSceneBack,
    getAnimation: getBackAnimation,
  } = useWebAnimations(backAnimation);

  const {
    ref: refSceneBack2,
    getAnimation: getBackAnimation2,
  } = useWebAnimations(backAnimation);

  //Foreground animation
  const foreAnimation = {
    keyframes: { transform: ["translateX(100%)", "translateX(-100%)"] },
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  };

  const {
    ref: refSceneFore,
    getAnimation: getForeAnimation,
  } = useWebAnimations(foreAnimation);

  const {
    ref: refSceneFore2,
    getAnimation: getForeAnimation2,
  } = useWebAnimations(foreAnimation);

  const getAnimationList = [
    getAnimation,
    getForeAnimation,
    getForeAnimation2,
    getBackAnimation,
    getBackAnimation2,
  ];

  let [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      setInterval(speedDown, 3000);
    }
  }, [flag]);

  //Speed up animation
  const speedUp = () => {
    setFlag(true);
    getAnimationList.forEach((anim) => {
      const animation = anim();
      animation.updatePlaybackRate((animation.playbackRate += 0.75));
      // console.log(animation.playbackRate);
    });
  };

  const speedDown = () => {
    // console.log("getAnimation.playbackRate");

    getAnimationList.forEach((anim, index) => {
      const animation = anim();

      if (animation.playbackRate > 0.6) {
        console.log(index, animation.playbackRate);
        animation.playbackRate = animation.playbackRate - 0.25;
      }
    });
  };

  return (
    <>
      <div className="sky"></div>

      <div className="earth">
        <div id="red-queen_and_alice" onClick={() => speedUp()}>
          <img
            ref={refAlice}
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt="Alice and the Red Queen running to stay in place."
          />
        </div>
      </div>
      <div ref={refSceneFore} className="scenery" id="foreground1">
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
          alt=" "
        />
      </div>
      <div ref={refSceneFore2} className="scenery" id="foreground2">
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
          alt=" "
        />
      </div>
      <div ref={refSceneBack} className="scenery" id="background1">
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
          alt=" "
        />
      </div>
      <div ref={refSceneBack2} className="scenery" id="background2">
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
          alt=" "
        />
      </div>
    </>
  );
};

export default App;
