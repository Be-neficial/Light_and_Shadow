
let nowindexA = 1;
let nowindexB = 1;
let nowindexC = 1;

let slideBox;

const imageSliderA = document.querySelector('#imageSlider');
const imageSliderB = document.querySelector('#imageSlider2');
const imageSliderC = document.querySelector('#imageSlider3');

/*
const buttomBtn01 = document.querySelector('#imgTo1');
const buttomBtn02 = document.querySelector('#imgTo2');
const buttomBtn03 = document.querySelector('#imgTo3');
const buttomBtn04 = document.querySelector('#imgTo4'); */

const bottomBtnsA = document.querySelectorAll('.bottomBtnA');
const bottomBtnsB = document.querySelectorAll('.bottomBtnB');
const bottomBtnsC = document.querySelectorAll('.bottomBtnC');

const leftArrowA = document.querySelector('#leftArrowA');
const rightArrowA = document.querySelector('#rightArrowA');
const leftArrowB = document.querySelector('#leftArrowB');
const rightArrowB = document.querySelector('#rightArrowB');
const leftArrowC = document.querySelector('#leftArrowC');
const rightArrowC = document.querySelector('#rightArrowC');

/*
buttomBtn01.addEventListener('click', moveA);
buttomBtn02.addEventListener('click', moveB);
buttomBtn03.addEventListener('click', moveC);
buttomBtn04.addEventListener('click', moveD); */

for(var i =0; i<bottomBtnsA.length; i++)
{
    bottomBtnsA[i].addEventListener('click', getIndex);

    function getIndex()
    {
        slideBox = 1; //첫번째 슬라이드 박스 설정
        var index = this.getAttribute('clickVal');
        console.log('clickVal==='+index);
        nowindexA = index;
        moveTo();
    }
}

for(var j =0; j<bottomBtnsB.length; j++)
{
    bottomBtnsB[j].addEventListener('click', getIndex);

    function getIndex()
    {
        slideBox = 2; //첫번째 슬라이드 박스 설정
        var index = this.getAttribute('clickVal');
        console.log('clickVal==='+index);
        nowindexB = index;
        moveTo();
    }
}

for(var k =0; k<bottomBtnsC.length; k++)
{
    bottomBtnsC[k].addEventListener('click', getIndex);

    function getIndex()
    {
        slideBox = 3; //첫번째 슬라이드 박스 설정
        var index = this.getAttribute('clickVal');
        console.log('clickVal==='+index);
        nowindexC = index;
        moveTo();
    }
}

leftArrowA.addEventListener('click', moveleftA);
rightArrowA.addEventListener('click', moverightA);
leftArrowB.addEventListener('click', moveleftB);
rightArrowB.addEventListener('click', moverightB);
leftArrowC.addEventListener('click', moveleftC);
rightArrowC.addEventListener('click', moverightC);

function moveTo()
{
    switch(slideBox){
        case 1:
            if(nowindexA =='1')
            {
                imageSliderA.style.transform = 'translate(0px)';
            }
            else if(nowindexA=='2')
            {
                imageSliderA.style.transform = 'translate(-1060px)';
            }else if(nowindexA == '3')
            {
                imageSliderA.style.transform = 'translate(-2120px)';
            }
            else if(nowindexA == '4')
            {
                imageSliderA.style.transform = 'translate(-3180px)';
            }
        break;
        case 2:
            if(nowindexB =='1')
            {
                imageSliderB.style.transform = 'translate(0px)';
            }
            else if(nowindexB=='2')
            {
                imageSliderB.style.transform = 'translate(-1060px)';
            }else if(nowindexB == '3')
            {
                imageSliderB.style.transform = 'translate(-2120px)';
            }
            else if(nowindexB == '4')
            {
                imageSliderB.style.transform = 'translate(-3180px)';
            }
            break;
        case 3:
            if(nowindexC =='1')
            {
                imageSliderC.style.transform = 'translate(0px)';
            }
            else if(nowindexC=='2')
            {
                imageSliderC.style.transform = 'translate(-1060px)';
            }else if(nowindexC == '3')
            {
                imageSliderC.style.transform = 'translate(-2120px)';
            }
            else if(nowindexC == '4')
            {
                imageSliderC.style.transform = 'translate(-3180px)';
            }
            else if(nowindexC == '5')
            {
                imageSliderC.style.transform = 'translate(-4240px)';
            }
            break;
    }
}

//1번 슬라이드 왼쪽으로 이동합니다.
function moveleftA()
{
    slideBox = 1;
    if(nowindexA == 1)
    {
        nowindexA == 1;
    }
    else
    {
        nowindexA --;
    }
    moveTo();
}

//1번 오른쪽으로 이동합니다.
function moverightA()
{
    slideBox = 1;
    if(nowindexA == 4)
    {
        nowindexA == 4;
    }
    else
    {
        nowindexA ++;
    }
    moveTo();
}

//2번 슬라이드 왼쪽으로 이동합니다.
function moveleftB()
{
    slideBox = 2;
    if(nowindexB == 1)
    {
        nowindexB == 1;
    }
    else
    {
        nowindexB --;
    }
    moveTo();
}

//2번 오른쪽으로 이동합니다.
function moverightB()
{
    slideBox = 2;
    if(nowindexB == 4)
    {
        nowindexB == 4;
    }
    else
    {
        nowindexB ++;
    }
    moveTo();
}

//3번 슬라이드 왼쪽으로 이동합니다.
function moveleftC()
{
    slideBox = 3;
    if(nowindexC == 1)
    {
        nowindexC == 1;
    }
    else
    {
        nowindexC --;
    }
    moveTo();
}

//3번 오른쪽으로 이동합니다.
function moverightC()
{
    slideBox = 3;
    if(nowindexC == 5)
    {
        nowindexC == 5;
    }
    else
    {
        nowindexC ++;
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