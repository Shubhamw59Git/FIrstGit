import { LightningElement } from 'lwc';

export default class QuizAppLWC extends LightningElement 
{
    selected={}
    cAnswer=0

    
    questions=[
        {
            id:"Q1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"Map Loop"
            },
            cAnswer:"c"
        },
        {
            id:"Q2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            cAnswer:"b"
        },
        {
            id:"Q3",
            question:"Which one of the following is a decorator?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            cAnswer:"c"
        }
    ]

  /*  changeValue (event){
            const {name,value}=event.target
            this.selected=
    }*/
}