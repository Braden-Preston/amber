import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';

const styles = {
    root: {
        height: '100vh !important',
        zIndex: -1,
    },
};

class Bubbling extends React.Component {
    shouldComponentUpdate = (nextProps, nextState) => false

    render() {
        console.log(window.innerWidth)
        const { classes } = this.props
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": `${window.innerWidth / 1920 * 455}`,
                            "density": {
                                "enable": true,
                                "value_area": 2446.3576890600452
                            }
                        },
                        "color": {
                            "value": "#ffe466"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#ffa884"
                            },
                            "polygon": {
                                "nb_sides": 3
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 14,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 500,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 4,
                            "direction": "top",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 0.5
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 4,
                                "duration": 0.3,
                                "opacity": 1,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
                style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(152deg, #f7b655 10%, #ff983d 51%, #a73906 100%)',
                    height: '100vh !important',
                }}
            />
        )
    }
}

export default withStyles(styles)(Bubbling);