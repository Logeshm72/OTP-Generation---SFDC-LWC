/* eslint-disable no-unused-vars */
/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement } from 'lwc';

export default class OtpGenerationLWCDemo extends LightningElement {

    
    SentOTP=''
    OTPLength = 6
    disableOTP = false
    showTimerText =''
    timeRemaining = 5
    showTimer =false
    generateOTP(){

        let otpArray =[]
        for(let genOTP=0;genOTP<=this.OTPLength;genOTP++){
            otpArray.push(Math.floor(Math.random() * 10));
        }
       this.SentOTP = otpArray.join('')
       this.disableOTP = true
       this.showTimer = true

       let showTimeRemaining =  this.timeRemaining
      let timerInterval = setInterval(() => {
        showTimeRemaining--;

        this.showTimerText =`Generated OTP will get expired in ${showTimeRemaining} seconds.`;

        if(showTimeRemaining<=0){
            clearInterval(timerInterval);
            this.disableOTP =false
            this.showTimer=false
            this.SentOTP=''
        }
       }, 1000); //1000 ms is equal to 1 sec
    }
}