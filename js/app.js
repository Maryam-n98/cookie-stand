'use strict';
// let fish = document.getElementById('salmon');
// console.log(salmon);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle = {
    CustomerNum: [],
    min1: 23,
    name:'Seattle',
    max1: 65,
    avg1: 6.3,
    totalCookie1: 0,
    cookieNum: [],
    getCustomerNum: function () {
        for (let i = 0; i < hours.length; i++) {
            // this.CustomerNum.push((this.min1, this.max1, this.avg1))
            let customerRandom = Math.floor(Math.random() * (this.max1 - this.min1 + 1) + this.min1);
            this.CustomerNum[i] = (customerRandom);
        }
        console.log(this.CustomerNum);

    },
    getCookieNum: function () {
        for (let b = 0; b < hours.length; b++) {
            let cookieRandom = Math.floor(this.CustomerNum[b] * this.avg1);
            this.cookieNum[b] = (cookieRandom);
            this.totalCookie1 += this.cookieNum[b];

        }
        console.log(this.cookieNum);
        console.log(this.totalCookie1);

    },
    render:function(){
        let Salmon =document.getElementById('Salmon');
        console.log(Salmon);
        let nameObject=document.createElement('h3');
        Salmon.appendChild(nameObject);
        nameObject.textContent =this.name;
        let ulElement=document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let liElement= document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=`${hours[i]} : ${this.cookieNum[i]} cookies`
        }
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`Total: ${this.totalCookie1} Cookies`
        Salmon.appendChild(ulElement);
    }
}
Seattle.getCustomerNum();
Seattle.getCookieNum();
Seattle.render();
// let liElement = document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent = this.cookieNum[b];

let Tokyo = {
    CustomerNum2: [],
    name:'Tokyo',
    min2: 3,
    max2: 24,
    avg2: 1.2,
    totalCookie: 0,
    cookieNum2: [],
    getCustomerNum2: function () {
        for (let i = 0; i < hours.length; i++) {
            let customerRandom2 = Math.floor(Math.random() * (this.max2 - this.min2 + 1) + this.min2);
            this.CustomerNum2[i] = (customerRandom2);
        }
        console.log(this.CustomerNum2);
    },
    getCookieNum2: function () {
        for (let b = 0; b < hours.length; b++) {
            let cookieRandom2 = Math.floor(this.CustomerNum2[b] * this.avg2);
            this.cookieNum2[b] = (cookieRandom2);
            this.totalCookie += this.cookieNum2[b];
        }
        console.log(this.cookieNum2);
        console.log(this.totalCookie);
    },
    render:function(){
        let Salmon =document.getElementById('Salmon');
        console.log(Salmon);
        let nameObject=document.createElement('h3');
        Salmon.appendChild(nameObject);
        nameObject.textContent =this.name;
        let ulElement=document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let liElement= document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=`${hours[i]} : ${this.cookieNum2[i]} cookies`
        }
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`Total: ${this.totalCookie} Cookies`
        Salmon.appendChild(ulElement);
    }
}
Tokyo.getCustomerNum2();
Tokyo.getCookieNum2();
Tokyo.render();

let Dubai = {
    CustomerNum3: [],
    name:'Dubai',
    min3: 11,
    max3: 38,
    avg3: 3.7,
    totalCookie3: 0,
    cookieNum3: [],
    getCustomerNum3: function () {
        for (let i = 0; i < hours.length; i++) {
            let customerRandom3 = Math.floor(Math.random() * (this.max3 - this.min3 + 1) + this.min3);
            this.CustomerNum3[i] = (customerRandom3);
        }
        console.log(this.CustomerNum3);
    },
    getCookieNum3: function () {
        for (let b = 0; b < hours.length; b++) {
            let cookieRandom3 = Math.floor(this.CustomerNum3[b] * this.avg3);
            this.cookieNum3[b] = (cookieRandom3);
            this.totalCookie3 += this.cookieNum3[b];
        }
        console.log(this.cookieNum3);
        console.log(this.totalCookie3);
    },
    render:function(){
        let Salmon =document.getElementById('Salmon');
        console.log(Salmon);
        let nameObject=document.createElement('h3');
        Salmon.appendChild(nameObject);
        nameObject.textContent =this.name;
        let ulElement=document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let liElement= document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=`${hours[i]} : ${this.cookieNum3[i]} cookies`
        }
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`Total: ${this.totalCookie3} Cookies`
        Salmon.appendChild(ulElement);
    }
}
Dubai.getCustomerNum3();
Dubai.getCookieNum3();
Dubai.render();

let Paris = {
    CustomerNum4: [],
    name:'Paris',
    min4: 20,
    max4: 38,
    avg4: 2.3,
    totalCookie4: 0,
    cookieNum4: [],
    getCustomerNum4: function () {
        for (let i = 0; i < hours.length; i++) {
            let customerRandom4 = Math.floor(Math.random() * (this.max4 - this.min4 + 1) + this.min4);
            this.CustomerNum4[i] = (customerRandom4);
        }
        console.log(this.CustomerNum4);
    },
    getCookieNum4: function () {
        for (let b = 0; b < hours.length; b++) {
            let cookieRandom4 = Math.floor(this.CustomerNum4[b] * this.avg4);
            this.cookieNum4[b] = (cookieRandom4);
            this.totalCookie4 += this.cookieNum4[b];
        }
        console.log(this.cookieNum4);
        console.log(this.totalCookie4);
    },
    render:function(){
        let Salmon =document.getElementById('Salmon');
        console.log(Salmon);
        let nameObject=document.createElement('h3');
        Salmon.appendChild(nameObject);
        nameObject.textContent =this.name;
        let ulElement=document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let liElement= document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=`${hours[i]} : ${this.cookieNum4[i]} cookies`
        }
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`Total: ${this.totalCookie4} Cookies`
        Salmon.appendChild(ulElement);
    }
}
Paris.getCustomerNum4();
Paris.getCookieNum4();
Paris.render();

let Lima = {
    CustomerNum5: [],
    min5: 2,
    name:'Lima',
    max5: 16,
    avg5: 4.6,
    totalCookie5: 0,
    cookieNum5: [],
    getCustomerNum5: function () {
        for (let i = 0; i < hours.length; i++) {
            let customerRandom5 = Math.floor(Math.random() * (this.max5 - this.min5 + 1) + this.min5);
            this.CustomerNum5[i] = (customerRandom5);
        }
        console.log(this.CustomerNum5);
    },
    getCookieNum5: function () {
        for (let b = 0; b < hours.length; b++) {
            let cookieRandom5 = Math.floor(this.CustomerNum5[b] * this.avg5);
            this.cookieNum5[b] = (cookieRandom5);
            this.totalCookie5 += this.cookieNum5[b];
        }
        console.log(this.cookieNum5);
        console.log(this.totalCookie5);
    },
    render:function(){
        let Salmon =document.getElementById('Salmon');
        console.log(Salmon);
        let nameObject=document.createElement('h3');
        Salmon.appendChild(nameObject);
        nameObject.textContent =this.name;
        let ulElement=document.createElement('ul');
        for (let i = 0; i < hours.length; i++) {
            let liElement= document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=`${hours[i]} : ${this.cookieNum5[i]} cookies`
        }
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`Total: ${this.totalCookie5} Cookies`
        Salmon.appendChild(ulElement);
    }
}
Lima.getCustomerNum5();
Lima.getCookieNum5();
Lima.render();