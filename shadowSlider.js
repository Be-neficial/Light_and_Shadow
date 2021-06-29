
let nowindexD = 1;
let nowindexE = 1;
let nowindexF = 1;

let slideBox;

const imageSliderD = document.querySelector('#imageSlider4');
const imageSliderE = document.querySelector('#imageSlider5');
const imageSliderF = document.querySelector('#imageSlider6');

/*
const buttomBtn01 = document.querySelector('#imgTo1');
const buttomBtn02 = document.querySelector('#imgTo2');
const buttomBtn03 = document.querySelector('#imgTo3');
const buttomBtn04 = document.querySelector('#imgTo4'); */

const bottomBtnsD = document.querySelectorAll('.bottomBtnD');
const bottomBtnsE = document.querySelectorAll('.bottomBtnE');
const bottomBtnsF = document.querySelectorAll('.bottomBtnF');

const leftArrowD = document.querySelector('#leftArrowD');
const rightArrowD = document.querySelector('#rightArrowD');
const leftArrowE = document.querySelector('#leftArrowE');
const rightArrowE = document.querySelector('#rightArrowE');
const leftArrowF = document.querySelector('#leftArrowF');
const rightArrowF = document.querySelector('#rightArrowF');

/*
buttomBtn01.addEventListener('click', moveA);
buttomBtn02.addEventListener('click', moveB);
buttomBtn03.addEventListener('click', moveC);
buttomBtn04.addEventListener('click', moveD); */

for(var i =0; i<bottomBtnsD.length; i++)
{
    bottomBtnsD[i].addEventListener('click', getIndex);

    function getIndex()
    {
        slideBox = 1; //첫번째 슬라이드 박스 설정
        var index = this.getAttribute('clickVal');
        console.log('clickVal==='+index);
        nowindexD = index;
        moveTo();
    }
}

for(var j =0; j<bottomBtnsE.length; j++)
{
    bottomBtnsE[j].addEventListener('click', getIndex);

    function getIndex()
    {
        slideBox = 2; //첫번째 슬라이드 박스 설정
        var index = this.getAttribute('clickVal');
        console.log('clickVal==='+index);
        nowindexE = index;
        moveTo();
    }
}

for(var k =0; k<bottomBtnsF.length; k++)
{
    bottomBtnsF[k].addEventListener('click', getIndex);

    function getIndex()
    {
        slideBox = 3; //첫번째 슬라이드 박스 설정
        var index = this.getAttribute('clickVal');
        console.log('clickVal==='+index);
        nowindexF = index;
        moveTo();
    }
}

leftArrowD.addEventListener('click', moveleftD);
rightArrowD.addEventListener('click', moverightD);
leftArrowE.addEventListener('click', moveleftE);
rightArrowE.addEventListener('click', moverightE);
leftArrowF.addEventListener('click', moveleftF);
rightArrowF.addEventListener('click', moverightF);

function moveTo()
{
    switch(slideBox){
        case 1:
            if(nowindexD =='1')
            {
                imageSliderD.style.transform = 'translate(0px)';
            }
            else if(nowindexD=='2')
            {
                imageSliderD.style.transform = 'translate(-1060px)';
            }else if(nowindexD == '3')
            {
                imageSliderD.style.transform = 'translate(-2120px)';
            }
            else if(nowindexD == '4')
            {
                imageSliderD.style.transform = 'translate(-3180px)';
            }
        break;
        case 2:
            if(nowindexE =='1')
            {
                imageSliderE.style.transform = 'translate(0px)';
            }
            else if(nowindexE=='2')
            {
                imageSliderE.style.transform = 'translate(-1060px)';
            }else if(nowindexE == '3')
            {
                imageSliderE.style.transform = 'translate(-2120px)';
            }
            break;
        case 3:
            if(nowindexF =='1')
            {
                imageSliderF.style.transform = 'translate(0px)';
            }
            else if(nowindexF=='2')
            {
                imageSliderF.style.transform = 'translate(-1060px)';
            }else if(nowindexF == '3')
            {
                imageSliderF.style.transform = 'translate(-2120px)';
            }
            else if(nowindexF == '4')
            {
                imageSliderF.style.transform = 'translate(-3180px)';
            }
            break;
    }
}

//1번 슬라이드 왼쪽으로 이동합니다.
function moveleftD()
{
    slideBox = 1;
    if(nowindexD == 1)
    {
        nowindexD == 1;
    }
    else
    {
        nowindexD --;
    }
    moveTo();
}

//1번 오른쪽으로 이동합니다.
function moverightD()
{
    slideBox = 1;
    if(nowindexD == 4)
    {
        nowindexD == 4;
    }
    else
    {
        nowindexD ++;
    }
    moveTo();
}

//2번 슬라이드 왼쪽으로 이동합니다.
function moveleftE()
{
    slideBox = 2;
    if(nowindexE == 1)
    {
        nowindexE == 1;
    }
    else
    {
        nowindexE --;
    }
    moveTo();
}

//2번 오른쪽으로 이동합니다.
function moverightE()
{
    slideBox = 2;
    if(nowindexE == 3)
    {
        nowindexE == 3;
    }
    else
    {
        nowindexE ++;
    }
    moveTo();
}

//3번 슬라이드 왼쪽으로 이동합니다.
function moveleftF()
{
    slideBox = 3;
    if(nowindexF == 1)
    {
        nowindexF == 1;
    }
    else
    {
        nowindexF --;
    }
    moveTo();
}

//3번 오른쪽으로 이동합니다.
function moverightF()
{
    slideBox = 3;
    if(nowindexF == 4)
    {
        nowindexF == 4;
    }
    else
    {
        nowindexF ++;
    }
    moveTo();
}


/*
//*첫번째 이미지로 이동합니다.
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowindex =1;
}

//*두번째 이미지로 이동합니다.
function moveB()
{
    imageSlider.style.transform = 'translate(-1060px)';
    nowindex =2;
}

//*세번째 이미지로 이동합니다.
function moveC()
{
    imageSlider.style.transform = 'translate(-2120px)';
    nowindex =3;
}

//*네번째 이미지로 이동합니다.
function moveD()
{
    imageSlider.style.transform = 'translate(-3180px)';
    nowindex =4;
}

//왼쪽으로 이동합니다.
function moveleft()
{
    if(nowindex == 1)
    {
        nowindex == 1;
    }
    else
    {
        nowindex --;
    }
    moveSlider(nowindex)
}

//오른쪽으로 이동합니다.
function moveright()
{
    if(nowindex == 4)
    {
        nowindex == 4;
    }
    else
    {
        nowindex ++;
    }
    moveSlider(nowindex)
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
    }
}

*/