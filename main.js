let featureSection = document.querySelector('.feature');
let featureText = document.querySelector('.feature>p');
let featureDives = document.querySelectorAll('.feature>div>div');
let bdy = document.querySelector('body');
let header = document.querySelector('header');
let logo = document.querySelector('header>div>img');
let headerText = document.querySelectorAll('header>nav>ul>li>a');
let headerTextParent = document.querySelectorAll('header>nav>ul>li');
let nextLevelDiv = document.querySelector('.NextLevel > div');
let nextlevelchildren = document.querySelectorAll('.NextLevel > div >div >div');
let nextLevelImg = document.querySelector('.NextLevel > div > .imglevel > img');
let personText = document.querySelector('.persons > div > .text');
let personProfile = document.querySelectorAll('.persons >div>.profile >div');
let AllPerson = document.querySelectorAll('.persons > div');
let top1 = 70;
let opCounter = 1;
let oldrotate = 0;
let oldScroll = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    console.log(scrollTop);
    //start middle of site 
    if (scrollTop >= 480 && scrollTop <= 1500) {
        logo.setAttribute('src', 'assets/img/logo_white.svg');

        header.style.backgroundColor = 'rgb(43, 43, 43)';
        featureText.style.color = 'white';
        bdy.style.backgroundColor = 'rgb(24,24,24)';
        headerText.forEach(link => {
            link.style.color = 'white';
        });
        headerTextParent.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                headerText[index].style.color = 'black';
            })
            link.addEventListener('mouseleave', () => {
                headerText[index].style.color = 'white';
            })
        });
        if (scrollTop > 500 && scrollTop <= 700) {
            featureText.style.opacity = ((700 - (scrollTop)) / 2) + '%'
            if (scrollTop <= 510 && scrollTop >= 490) {
                featureText.style.opacity = '1'

            }
            if (scrollTop <= 720 && scrollTop >= 690) {
                featureText.style.opacity = '0';

            }
        }
        if (scrollTop >= 700 && scrollTop <= 990) {
            featureDives.forEach((feature, index) => {

                // console.log(rotate + 'rotate');
                if (index === 0) {
                    let rotate = (parseInt((990 - scrollTop)) / 10) / 3;
                    let translate1 = (parseInt((990 - scrollTop)) / 3);
                    let translate2 = (parseInt((990 - scrollTop)) / 4.3);
                    feature.style.transform = `rotate(${-rotate}deg) translateY(${translate1}px) translateX(${translate2}px)`
                    if (scrollTop >= 970 && scrollTop <= 1060) {
                        feature.style.transform = 'rotate(0deg) translateY(0px) translateX(0px)';
                    } if (scrollTop >= 650 && scrollTop <= 705) {
                        feature.style.transform = 'rotate(-10deg) translateY(100px) translateX(70px)';
                    }
                }
                if (index === 1) {
                    // let rotate = (parseInt((990 - scrollTop)) / 10) / 3;
                    let translate1 = (parseInt((990 - scrollTop)) / 4);
                    // let translate2 = (parseInt((990 - scrollTop)) / 4.3);
                    feature.style.transform = ` translateY(${translate1}px) translateX(0px)`
                    if (scrollTop >= 970 && scrollTop <= 1060) {
                        feature.style.transform = 'translateY(0px) translateX(0px)';
                    } if (scrollTop >= 650 && scrollTop <= 705) {
                        feature.style.transform = ' translateY(60px) translateX(0px)';
                    }
                }
                if (index === 2) {
                    let rotate = (parseInt((990 - scrollTop)) / 10) / 3;
                    let translate1 = (parseInt((990 - scrollTop)) / 3);
                    let translate2 = (parseInt((990 - scrollTop)) / 4.3);
                    feature.style.transform = `rotate(${rotate}deg) translateY(${translate1}px) translateX(${-translate2}px)`
                    if (scrollTop >= 970 && scrollTop <= 1060) {
                        feature.style.transform = 'rotate(0deg) translateY(0px) translateX(0px)';
                    } if (scrollTop >= 650 && scrollTop <= 705) {
                        feature.style.transform = 'rotate(10deg) translateY(100px) translateX(-70px)';
                    }
                }
            })
        }
    } else {
        logo.setAttribute('src', 'assets/img/logo.svg');
        header.style.backgroundColor = '';
        featureText.style.color = '';
        bdy.style.backgroundColor = '';
        headerText.forEach(link => {
            link.style.color = '';
        });
        headerTextParent.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                headerText[index].style.color = 'white';
            })
            link.addEventListener('mouseleave', () => {
                headerText[index].style.color = 'black';
            })
        });
    }
    if (scrollTop >= 1610 && scrollTop <= 4200) {
        let x = 8;
        x = x * 7;
        nextlevelchildren.forEach((child, index) => {
            if (index == 0) {

            } else if (index == 1 && scrollTop < 2000) {
                nextlevelchildren[0].style.opacity = (2000 - scrollTop) / 1000;

                if (scrollTop <= 2250 && scrollTop >= 1900) {
                    nextlevelchildren[0].style.opacity = 0;
                }
                if ((1760 - scrollTop) < (-134)) {
                    nextLevelImg.style.opacity = 1;

                    child.style.transform = `translateY(${-134}px)`

                } else {
                    if (((1760 - scrollTop) / 2) <= 20) {
                        opCounter = opCounter - 0.33;
                        nextLevelImg.style.opacity = opCounter;

                        if (((1760 - scrollTop) / 2) <= 0) {
                            if (((1760 - scrollTop) / 2) <= -11 && ((1760 - scrollTop) / 2) >= -23) {
                                nextLevelImg.setAttribute('src', 'assets/img/Next2.jpeg');
                            }
                            // opCounter = opCounter + 0.33;

                            // nextLevelImg.style.opacity = opCounter;

                        }

                    } else {
                        opCounter = opCounter - 0.33;

                        nextLevelImg.setAttribute('src', 'assets/img/Next1.avif')

                    }

                    child.style.transform = `translateY(${((1760 - scrollTop))}px)`
                }

            } else if (index == 2 && scrollTop >= 2100 && scrollTop <= 3000) {
                if (scrollTop >= 2250 && scrollTop <= 2400) {
                    nextlevelchildren[1].childNodes[3].style.opacity = (2400 - scrollTop) / 100;
                    nextlevelchildren[1].childNodes[5].style.opacity = (2400 - scrollTop) / 100;
                }
                if ((2000 - scrollTop) < -310) {
                    child.style.transform = `translateY(-340px)`;

                } else if ((2000 - scrollTop) >= -115) {
                    child.style.transform = `translateY(-70px)`;

                } else {
                    child.style.transform = `translateY(${(2000 - scrollTop)}px)`;

                }



            } else if (index == 3 && scrollTop >= 2574 && scrollTop <= 4000) {
                // if (scrollTop >= 2250 && scrollTop <= 2400) {
                //     nextlevelchildren[2].childNodes[3].style.opacity = (2400 - scrollTop) / 100;
                //     nextlevelchildren[2].childNodes[5].style.opacity = (2400 - scrollTop) / 100;
                // }
                if (scrollTop - 2300 > 550) {
                    child.style.transform = `translateY(-548px)`;

                } else {
                    child.style.transform = `translateY(-${(scrollTop - 2300)}px)`;

                }


                // console.log(`translateY(${(2000 - scrollTop)}px)`);



            } else if (index == 4 && scrollTop >= 3200 && scrollTop <= 4500) {
                // if (scrollTop >= 2250 && scrollTop <= 2400) {
                //     nextlevelchildren[2].childNodes[3].style.opacity = (2400 - scrollTop) / 100;
                //     nextlevelchildren[2].childNodes[5].style.opacity = (2400 - scrollTop) / 100;
                // }
                if (scrollTop - 2700 > 775) {
                    child.style.transform = `translateY(-750px)`;

                } else if (scrollTop - 2700 < 558) {
                    child.style.transform = `translateY(-480px)`;

                } else {
                    child.style.transform = `translateY(-${(scrollTop - 2700)}px)`;

                }


                // console.log(`translateY(${(2000 - scrollTop)}px)`);



            }
        })
    }
    //end middle of site


    //start persons section 


    if (scrollTop >= 4200 && scrollTop <= 4900) {
        logo.setAttribute('src', 'assets/img/logo_white.svg');

        header.style.backgroundColor = 'rgb(43, 43, 43)';
        featureText.style.color = 'white';
        bdy.style.backgroundColor = 'rgb(24,24,24)';
        headerText.forEach(link => {
            link.style.color = 'white';
        });
        headerTextParent.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                headerText[index].style.color = 'black';
            })
            link.addEventListener('mouseleave', () => {
                headerText[index].style.color = 'white';
            })
        });

        if ((scrollTop - 4200 < 425) && (oldScroll < scrollTop)) {
            if (scrollTop - 4200 > 410) {
                personText.style.transform = `translateY(${420 - (scrollTop - 4200)}px) rotate(0deg)`;
                console.log(personProfile);
                personProfile.forEach((item, index) => {
                    if (index === 0) {
                        item.style.transform = `rotate(0deg)`;
                    }
                    if (index === 1) {
                        item.style.transform = `rotate(0deg)`;
                    }
                    if (index === 2) {
                        item.style.transform = `translateY(0px) rotate(0deg)`;
                    }
                })

            } else {
                oldrotate = oldrotate + 0.21;
                personText.style.transform = `translateY(${420 - (scrollTop - 4200)}px) rotate(${-10 + oldrotate}deg)`;
                personProfile.forEach((item, index) => {
                    if (index === 0) {
                        item.style.transform = ` rotate(${-10 + oldrotate}deg)`;
                    }
                    if (index === 1) {
                        item.style.transform = `rotate(0deg)`;
                    }
                    if (index === 2) {
                        item.style.transform = `translateY(0px) rotate(0deg)`;
                    }
                })
            }

        } else if ((scrollTop - 4200 < 420) && (oldScroll > scrollTop)) {
            oldrotate = oldrotate - 0.21;
            personText.style.transform = `translateY(${420 - (scrollTop - 4200)}px) rotate(${oldrotate}deg)`;
            personProfile.forEach((item, index) => {
                if (index === 0) {
                    item.style.transform = ` rotate(${-10 + oldrotate}deg)`;
                }
                if (index === 1) {
                    item.style.transform = `rotate(${-10 + oldrotate}deg)`;
                }
                if (index === 2) {
                    item.style.transform = `translateY(${420 - (scrollTop - 4200)}px) rotate(${oldrotate}deg)`;
                }
            })
        }


    } else if (scrollTop >= 4900 && scrollTop <= 5440) {
        logo.setAttribute('src', 'assets/img/logo_white.svg');

        header.style.backgroundColor = 'rgb(43, 43, 43)';
        featureText.style.color = 'white';
        bdy.style.backgroundColor = 'rgb(24,24,24)';
        headerText.forEach(link => {
            link.style.color = 'white';
        });
        headerTextParent.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                headerText[index].style.color = 'black';
            })
            link.addEventListener('mouseleave', () => {
                headerText[index].style.color = 'white';
            })
        });
        AllPerson.forEach((item, index) => {
            if (index === 0) {
                if (scrollTop > oldScroll) {
                    item.style.transform = `translateX(-${scrollTop - 4000}px)`

                } else {
                    console.log(scrollTop - 4800);
                    if ((scrollTop - 4800) <= 120 && (scrollTop - 4800) >= 86) {
                        console.log('dafsd');
                        item.style.transform = `translateX(30px)`
                    } else if ((scrollTop - 4800) > 122) {
                        item.style.transform = `translateX(-${scrollTop - 4800}px)`
                    }

                }
            }
            // if (index === 1) {
            //     AllPerson[index].style.top = `${scrollTop - 4200}px`
            // }

        })
    } else if (scrollTop >= 5360 && scrollTop <= 6500) {
        logo.setAttribute('src', 'assets/img/logo_white.svg');

        header.style.backgroundColor = 'rgb(43, 43, 43)';
        featureText.style.color = 'white';
        bdy.style.backgroundColor = 'rgb(24,24,24)';
        headerText.forEach(link => {
            link.style.color = 'white';
        });
        headerTextParent.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                headerText[index].style.color = 'black';
            })
            link.addEventListener('mouseleave', () => {
                headerText[index].style.color = 'white';
            })
        });
        AllPerson.forEach((item, index) => {
            if (index === 1) {
                console.log((scrollTop - 5500) + 'asd');
                if (scrollTop > oldScroll) {
                    // item.style.top = `${(scrollTop - 4500)}px`
                    if ((scrollTop - 5500) >= 6) {
                        item.style.transform = `translateX(0px)`;
                        return;

                    } else {

                        item.style.transform = `translateX(-${scrollTop - 5500}px)`
                    }
                }
                else {
                    item.style.transform = `translateX(${6500 - scrollTop})`

                    if ((scrollTop - 5500) <= -10) {
                        item.style.transform = `translateX(130%)`
                    }

                }
            }

        })
    }

    //end persons section
    oldScroll = scrollTop;

});