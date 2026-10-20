import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const questions = [
 {stage:'זיהוי הצורך', context:'התקבלה פנייה ממפקד על חייל תחת אחריותך המדווח על קושי כלכלי משמעותי וצפיפות חריגה בבית. מה הפעולה הראשונה הנכונה?', options:['לקבוע מיד ביקור בית ללא בדיקות נוספות.','לאסוף מידע ראשוני על היסטוריית הטיפול ולהשלים תמונת מצב עם המפקד לפני שיחה עם החייל.','לשלוח לחייל הודעה להגיע לשיחה בבסיס ולסגור את הנושא.','להניח שמדובר בקושי זמני ולהמתין.'], answer:1, feedback:'לפני כל ביקור בית יש לאסוף מידע ראשוני ולשוחח עם המפקד כדי להשלים תמונת מצב, לפני השיחה עם החייל.'},
 {stage:'שיחה עם החייל', context:'החלטת שיש צורך בביקור בית לאור החריגה המתוארת. מה נכון לעשות לפני ההגעה?', options:['לתאם ביקור עם המשפחה בלי לעדכן את החייל.','לבקש מהמפקד לתאם את הביקור במקומך.','לשוחח עם החייל, להבין את המצב ולהסביר את מטרת ביקור הבית תוך וידוא הסכמה ושיתוף פעולה.','להגיע לבית ללא תיאום כדי להבין את המצב האמיתי.'], answer:2, feedback:'ביקור הבית נעשה בשקיפות מול החייל, תוך הסבר המטרה, רגישות למצבו וקבלת הסכמתו.'},
 {stage:'תיאום הביקור', context:'לאחר השיחה עם החייל, יש לתאם את הביקור מול המשפחה. כיצד נכון לעשות זאת?', options:['להתקשר בשעות נוחות, להציג את עצמך, להסביר ברגישות את מטרת הביקור ולתאם זמן שנוח לצדדים, ורצוי גם למפקד המצטרף.','להגיע בשעה שנוחה לך בלי להודיע.','לשלוח הודעת WhatsApp קצרה בלבד.','לבקש מהחייל שיגיד להוריו שאת מגיעה.'], answer:0, feedback:'יש לבצע תיאום מסודר ומכבד הכולל הצגה עצמית, הסבר כללי על מטרת הביקור ותיאום זמן נוח, בלי לפגוע בחייל או במשפחה.'},
 {stage:'הכנה לביקור', context:'לאחר תיאום מסודר עם המשפחה, קבעתם ביקור בית למחר. מה נכון לעשות לפני היציאה?', options:['לצאת ללא הכנה ולהסתמך על מה שאת זוכרת.','לעבור על היסטוריית הטיפול ועיקרי השיחות, להביא טפסים רלוונטיים ולהכין שאלות.','להסתמך רק על מה שסיפרו החייל והמפקד.','לשאול את המפקד וקצינת הת״ש מה צריך לשאול במהלך הביקור.'], answer:1, feedback:'יש להגיע מוכנים מקצועית, עם נתונים מקדימים, שאלות וטפסים רלוונטיים למילוי במהלך הביקור.'},
 {stage:'הגעה לבית', context:'הגעת לבית המשפחה. מה הפעולה הנכונה בתחילת הביקור?', options:['להתחיל מיד לשאול שאלות על המצב הכלכלי.','לשוחח עם גורם אחד בלבד כדי לא להתבלבל.','להתחיל לסייר בבית ולפתוח את המקרר בלי לבקש רשות.','להציג שוב את עצמך, את תפקידך ואת מטרת הביקור ולהסביר כיצד הוא יתנהל.'], answer:3, feedback:'פתיחה ברורה ומכבדת מסייעת ליצור תחושת נוחות ושקיפות לגבי הביקור.'},
 {stage:'יצירת אמון', context:'המשפחה נראית מעט לחוצה. מה נכון לעשות?', options:['להמשיך בשאלות ישירות גם אם הן קשות.','לבקש לסיים את הביקור כדי לא לגרום לתחושה לא נעימה.','ליצור אווירה פתוחה, להדגיש שהדברים נשארים בחיסיון משרד הת״ש ולהבהיר שמטרת הביקור היא טובת החייל.','לשאול במהירות את כל השאלות וללכת.'], answer:2, feedback:'יצירת אמון ואווירה פתוחה חשובה לקבלת מידע אמין ולמיצוי ביקור הבית.'},
 {stage:'בירור המצב', context:'כיצד נכון לאסוף מידע ולהוביל את הביקור?', options:['לשאול רק שאלות כלליות שמופיעות בטופס.','לערוך סיור בבית בלי לשאול שאלות.','להוביל את הביקור לפי הטופס, להעמיק בתשובות ולשאול שאלות נוספות כדי להבין את המצב.','לתת למשפחה לדבר בחופשיות בלי לוודא שכל השאלות הרלוונטיות נענו.'], answer:2, feedback:'יש לבצע בירור מקיף, לשאול מעבר לטופס, להקשיב ולוודא שלא נותרו שאלות פתוחות.'},
 {stage:'התרשמות', context:'במהלך הביקור עלייך להתרשם מסביבת המגורים ומתנאי המחיה. מה חשוב לעשות?', options:['להסתכל במהירות על הבית ולחזור לשבת ולעבור על השאלות.','לצלם את הבית כדי שתוכלי להסתכל עליו במשרד.','לשאול רק על החדר של החייל.','לבקש בנימוס רשות לסיור בבית בליווי בן משפחה, ולהתרשם מתנאי המגורים ומהמצב הכללי ללא שיפוטיות.'], answer:3, feedback:'התרשמות מקצועית כוללת את תנאי המגורים ומספר הנפשות בבית, תוך בקשת רשות, נימוס והיעדר שיפוטיות.'},
 {stage:'בירור צרכים', context:'המשפחה מתארת קושי כלכלי וצפיפות, ומציינת מצב סוציו־אקונומי נמוך. מה נכון לעשות?', options:['להסביר שאוספים כעת נתונים ובהמשך ייבחנו בקשות ואפשרויות סיוע רלוונטיות.','להבטיח מיד סיוע.','להגיד שאין לך אפשרות לעזור.','להמליץ למשפחה לקחת הלוואה.'], answer:0, feedback:'אין להבטיח בקשות או הטבות מראש. יש להסביר ברגישות שהמידע ייבחן ושהנושא יועבר להמשך טיפול וסיוע ככל האפשר.'},
 {stage:'סיום הביקור', context:'הביקור הסתיים. מה נכון לעשות לפני היציאה?', options:['לצאת מיד.','לסכם את הדברים שעלו, לוודא שלא חסר פרט ולהסביר באופן כללי את המשך התהליך.','לבקש כבר עכשיו את כל האישורים הכלכליים.','להבטיח תשובה עד למחרת.'], answer:1, feedback:'לפני סיום הביקור יש לוודא שהתמונה מלאה, לסכם ולהסביר לחייל באופן כללי מה צפוי בהמשך.'},
 {stage:'סיכום והתרשמות', context:'חזרת לבסיס. מה נכון לעשות כעת בנוגע לביקור?', options:['להגיש בקשה על בסיס ההתרשמות בלבד.','לשוחח עם המפקד על מה שראית.','להשלים שיח עם המפקד ולוודא שטופס ביקור הבית מתועד באופן מסודר ומפורט, הכולל עובדות וממצאים.','להמתין שהחייל יבקש להגיש בקשות.'], answer:2, feedback:'יש לתעד את הביקור באופן מקצועי ומקיף, להשלים שיח עם המפקד ולגזור משמעויות על בסיס המידע שנאסף.'},
 {stage:'גיבוש המלצה', context:'לאחר ניתוח הנתונים, מה נכון לעשות?', options:['להחליט לבד על הבקשות בלי להתייעץ או לעדכן גורם נוסף.','לבחון את הנתונים בהתאם לקריטריונים להגשת בקשה, תוך התייעצות עם קצינת הת״ש והמפקד ושיח עם החייל.','לשאול את החייל בלבד מה הוא רוצה.','לא להמליץ על דבר כי ביקור הבית כבר סיפק כיוון.'], answer:1, feedback:'יש לגזור משמעויות מהפערים שעלו בביקור ולבחון את הנתונים עם הגורמים הרלוונטיים ובהיכרות עם המצב.'},
 {stage:'הגשה בהתאם', context:'נמצא שהמשפחה עומדת בקריטריונים למספר בקשות שונות. מה הפעולה הנכונה?', options:['להגיש את כלל הבקשות בהתאם לנהלים, בצירוף ביקור הבית לצורך איסוף רקע לבקשה.','להגיש בקשות ולהבטיח לחייל שהסיוע יאושר.','להעביר את הטיפול לקצינת ת״ש בלי לאסוף רקע.','לסגור את הטיפול.'], answer:0, feedback:'יש להגיש את הבקשות הרלוונטיות בהתאם לנהלים ולצרף את המידע התומך, בלי להבטיח אישור מראש.'},
 {stage:'עדכון החייל', context:'הבקשה הוגשה. מה נכון לעשות?', options:['לא לעדכן עד שתתקבל תשובה.','להגיד שהסיוע בטוח יאושר.','לא לעדכן כלל.','לשקף לחייל שהבקשה הוגשה ולהסביר את זמני הטיפול.'], answer:3, feedback:'חשוב לעדכן את החייל על הגשת הבקשה ולהסביר את זמני הטיפול, בלי להבטיח תוצאה.'},
 {stage:'מעקב', context:'הגשת את הבקשה והיא עדיין בטיפול. מה נכון לעשות?', options:['להניח שהנושא נסגר.','להמתין שקצינת הת״ש תדבר איתך על הבקשה.','לבצע מעקב אחר הבקשה ולעדכן את החייל והמפקדים עם קבלת תשובה.','לא לבדוק את סטטוס הבקשה.'], answer:2, feedback:'יש לבצע מעקב אחר הבקשה, וכשתתקבל תשובה לעדכן את החייל ואת המפקדים.'}
];

function App(){
 const [started,setStarted]=React.useState(false);
 const [index,setIndex]=React.useState(0);
 const [selected,setSelected]=React.useState(null);
 const [checked,setChecked]=React.useState(false);
 const [answers,setAnswers]=React.useState([]);
 const [finished,setFinished]=React.useState(false);
 const q=questions[index];
 const score=answers.reduce((sum,a)=>sum+(a.correct?1:0),0);
 const choose=(i)=>{if(!checked)setSelected(i)};
 const check=()=>{if(selected===null)return;setChecked(true);setAnswers(prev=>{const copy=[...prev];copy[index]={choice:selected,correct:selected===q.answer};return copy;});};
 const next=()=>{if(index<questions.length-1){setIndex(index+1);setSelected(null);setChecked(false)}else setFinished(true)};
 const restart=()=>{setStarted(false);setIndex(0);setSelected(null);setChecked(false);setAnswers([]);setFinished(false)};
 return <main className="app-shell">
  <header className="topbar"><div className="logo-container"><img className="topbar-logo" src="visit-course\src\assets\Bahad11.png" width="65px" height="65px" alt="" /></div><div><div className="h1-container"><h1>לומדת ביקור בית</h1></div></div></header>
  {!started ? <section className="welcome layout-card"><div className="welcome-copy"><h2>ברוכה הבאה ללומדת ביקור בית</h2><p> במהלך הלומדה תעברי בין שלבי העבודה המלווים את תהליך הטיפול, תבחרי את הפעולה המתאימה ותעני על שאלות מקצועיות. קחי את הזמן, חשבי על שלבי הטיפול שלמדת והפגיני את הידע שלך.
בהצלחה!</p><button className="primary" onClick={()=>setStarted(true)}>מתחילים <span>←</span></button></div><img className="welcome-art" src="/scenes/scene-00.jpg" alt="איור מתוך לומדת ביקור בית" onError={e=>e.currentTarget.style.display='none'}/></section>
  : finished ? <section className="result layout-card"><div className="result-icon">✓</div><p className="eyebrow">סיום הלומדה</p><h2>כל הכבוד, סיימת את הלומדה!</h2><p className="score">ענית נכון על <strong>{score}</strong> מתוך <strong>{questions.length}</strong> שאלות</p><div className="result-track"><span style={{width:`${score/questions.length*100}%`}}/></div><p>מומלץ לחזור על שלבים שבהם תרצי לחזק את הידע.</p><button className="primary" onClick={restart}>להתחיל מחדש ↻</button></section>
  : <section className="lesson">
   <div className="progress-row"><span>שאלה {index+1} מתוך {questions.length}</span><span>{Math.round((index+1)/questions.length*100)}%</span></div><div className="progress-track"><span style={{width:`${(index+1)/questions.length*100}%`}}/></div>
   <div className="lesson-grid"><aside className="scene-panel"><img src={`/scenes/scene-${String(index+1).padStart(2,'0')}.jpg`} alt="איור של שלב הביקור"/><div className="scene-caption"><span>שלב {index+1}</span><strong>{q.stage}</strong></div></aside>
    <article className="question-panel"><div className="stage-tag">{q.stage}</div><h2>{q.context}</h2><p className="choose-hint">בחרי את התשובה הנכונה:</p><div className="options">{q.options.map((opt,i)=><button key={opt} className={`option ${selected===i?'selected':''} ${checked&&i===q.answer?'correct':''} ${checked&&selected===i&&i!==q.answer?'wrong':''}`} onClick={()=>choose(i)} disabled={checked}><span className="option-letter">{['א','ב','ג','ד'][i]}</span><span>{opt}</span>{checked&&i===q.answer&&<span className="answer-mark">✓</span>}</button>)}</div>
    {checked&&<div className={`feedback ${selected===q.answer?'positive':'negative'}`}><strong>{selected===q.answer?'נכון מאוד!':'לא בדיוק — נמשיך ללמוד'}</strong><p>{q.feedback}</p></div>}
    <div className="actions">{!checked?<button className="primary" disabled={selected===null} onClick={check}>בדיקת תשובה</button>:<button className="primary" onClick={next}>{index===questions.length-1?'לסיום הלומדה':'לשאלה הבאה'} <span>←</span></button>}<span className="keyboard-note">{checked?'   ':''}</span></div>
   </article></div>
  </section>}
 </main>
}

createRoot(document.getElementById('root')).render(<App/>);
    