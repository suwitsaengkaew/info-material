import { QuizExamModel } from './quiz.model';

export const QuizExamQaDatas: QuizExamModel[] = [ // QA Exam
    {
        questionno: 'Q01',
        question: '1.) ถ้าพนักงานพบว่าขน Vent ที่ Side ที่ First ตัดส่งมามีความยาวเกิน 2 mm. พนักงานควรทำอย่างไร',
        answer: [
            { questionno: 'Q01', answer: 'ก. ตัดออกเอง', finalanswer: false },
            { questionno: 'Q01', answer: 'ข. ส่งคืนให้ First ตัดใหม่', finalanswer: true },
            { questionno: 'Q01', answer: 'ค. ยิง Hold', finalanswer: false },
            { questionno: 'Q01', answer: 'ง. ปล่อยเข้า W/H ปกติ', finalanswer: false }
        ]
    },
    {
        questionno: 'Q02',
        question: '2.) ยางที่พบ Defect CL จะต้องมีรอยแตกความยาวเท่าไรถึงจะ NG',
        answer: [
            { questionno: 'Q02', answer: 'ก. แตกยาวมากกว่า 20 mm.', finalanswer: false },
            { questionno: 'Q02', answer: 'ข. แตกยาวมากกว่า 40 mm.', finalanswer: true },
            { questionno: 'Q02', answer: 'ค. แตกยาวมากกว่า 10 mm.', finalanswer: false },
            { questionno: 'Q02', answer: 'ง. แตกยาวมากกว่า 30 mm.', finalanswer: false }
        ]
    },
    {
        questionno: 'Q03',
        question: '3.) ถ้าหากพนักงาน Third Inspection ( OE ) พบยางที่มี Defect พนักงานจะต้องผูกเชือกสีอะไรก่อนส่ง Re-pair',
        answer: [
            { questionno: 'Q03', answer: 'ก. สีเขียว', finalanswer: false },
            { questionno: 'Q03', answer: 'ข. สีขาว', finalanswer: false },
            { questionno: 'Q03', answer: 'ค. สีแดง', finalanswer: true },
            { questionno: 'Q03', answer: 'ง. สีเหลือง', finalanswer: false }
        ]
    },
    {
        questionno: 'Q04',
        question: '4.) กรณีใดที่พนักงานจะต้องผูกเชือกสีเขียว',
        answer: [
            { questionno: 'Q04', answer: 'ก. งาน Hold', finalanswer: false },
            { questionno: 'Q04', answer: 'ข. งาน Re-pair', finalanswer: false },
            { questionno: 'Q04', answer: 'ค. งาน New Mold', finalanswer: false },
            { questionno: 'Q04', answer: 'ง. งานร่วง UF/DB Class2', finalanswer: true }
        ]
    },
    {
        questionno: 'Q05',
        question: '5.) กรณีใดที่พนักงานจะต้องผูกเชือกสีขาว',
        answer: [
            { questionno: 'Q05', answer: 'ก. งาน Hold', finalanswer: false },
            { questionno: 'Q05', answer: 'ข. งาน Re-pair', finalanswer: true },
            { questionno: 'Q05', answer: 'ค. งาน New Mold', finalanswer: false },
            { questionno: 'Q05', answer: 'ง. งานร่วง UF/DB Class2', finalanswer: false }
        ]
    },
    {
        questionno: 'Q06',
        question: '6.) Spec ของ Mark UF/DB  สีแดงและสีเหลืองมีเส้นผ่าศุนย์กลางกี่ mm.',
        answer: [
            { questionno: 'Q06', answer: 'ก. 10 - 11', finalanswer: false },
            { questionno: 'Q06', answer: 'ข. 10 - 13', finalanswer: false },
            { questionno: 'Q06', answer: 'ค. 10 - 15', finalanswer: false },
            { questionno: 'Q06', answer: 'ง. 10 - 12', finalanswer: true }
        ]
    },
    {
        questionno: 'Q07',
        question: '7.) กรณีตรวจยาง OE เจอ Mark แบบ กรวง  กรณีเป็นClass 2 ของ UF/DB จะต้องทำอย่างไร  ?',
        answer: [
            { questionno: 'Q07', answer: 'ก. ใช้ปากกา Marker เขียนให้เต็มวง', finalanswer: false },
            { questionno: 'Q07', answer: 'ข. ตรวจปกติแล้วปล่อยเข้า W/H', finalanswer: false },
            { questionno: 'Q07', answer: 'ค. ผูกเชือกสีเขียว ก่อนส่งเข้า  W/H', finalanswer: true },
            { questionno: 'Q07', answer: 'ง. ถูกทุกข้อ', finalanswer: false }
        ]
    },
    {
        questionno: 'Q08',
        question: '8.) หากตรวจเจอ Defect ที่ไม่สามารถจะ Repair ได้หรืองาน NG เราควรทำอย่างไร ?',
        answer: [
            { questionno: 'Q08', answer: 'ก. ผูกเชือกแล้วปล่อยเข้า W / H', finalanswer: false },
            { questionno: 'Q08', answer: 'ข. แจ้งหัวหน้างาน Super / Leader ทันที', finalanswer: true },
            { questionno: 'Q08', answer: 'ค. ตรวจยางปกติ', finalanswer: false },
            { questionno: 'Q08', answer: 'ง. Hold ยางเส้นนั้นไว้ให้ กะ ทำงาน อื่น', finalanswer: false }
        ]
    },
    {
        questionno: 'Q09',
        question: '9.) หากตรวจยางแล้วเจอ Mark UF/DB ไม่เต็มวง (Class 1) ข้อใด ปฏิบัติได้ถูกต้องที่สุด ?',
        answer: [
            { questionno: 'Q09', answer: 'ก. นาย.ก.ใช้สีแต้มให้เต็มวงและใช้ชอล์กสีเหลือง วง ไว้', finalanswer: false },
            { questionno: 'Q09', answer: 'ข. นาย.ข.ตรวจตามปกติเพราะไม่มีผลต่อ ยาง', finalanswer: false },
            { questionno: 'Q09', answer: 'ค. นาย.ค.ใช้สีแต้มให้เต็มวงกรณีเป็นเยอะไดแจ้งหัวหน้า', finalanswer: true },
            { questionno: 'Q09', answer: 'ง. นาย.ง.ผูกเชือกสีเขียวก่อนส่งเข้า W/H', finalanswer: false }
        ]
    },
    {
        questionno: 'Q10',
        question: '10.) รอยต่อของเส้นสี เหลื่อม กันได้กี่ mm.',
        answer: [
            { questionno: 'Q10', answer: 'ก. 1 mm.', finalanswer: false },
            { questionno: 'Q10', answer: 'ข. 2 mm.', finalanswer: true },
            { questionno: 'Q10', answer: 'ค. 3 mm.', finalanswer: false },
            { questionno: 'Q10', answer: 'ง. 4 mm.', finalanswer: false }
        ]
    }
]; // QA Exam
