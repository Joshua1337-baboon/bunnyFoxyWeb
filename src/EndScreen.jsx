﻿import React from 'react';
import cat from './assets/3.jpg';
import photo from './assets/4.jpg'

const EndScreen = ({ onRestart }) => {

    return (
        <div className="end-screen">
            <h2>Тест завершен!</h2>
            <h3 className='head'>ВАШ КОТИК - ЭТО КОТИК БАРАБАНЩИК, С ВЕРОЯТНОСТЬЮ 100% ОН ХОЧЕТ СТАТЬ ВАШИМ БУДУЩИМ МУЖЕМ, А ЕЩЁ ОН ВАС УЖЕ ОЧЕНЬ СИЛЬНО ЛЮБИТ</h3>
            <img src={photo} alt="" />
            <button onClick={onRestart} className="restart-button">Пройти тест снова</button>

            <div className="note">
                <h3 className="note-title">💖Записочка для Сонечки!💖</h3>
                <p className="note-content">Ааааааа..... Ну во-первых я тебя очень сильно люблю💖!!! А во-вторых очень рад, что встречу с тобой в новый год и в целом я невероятно рад, что ты появилась в моей жизни, Сонечка! Ты у меня правда самая лучшая и самая любимая на свете лисичка, ЖЕНЩИНА! Рядом с тобой я счастлив, перед тем как я думал о том, что напишу сюда у меня даже слёзы наворачивались!! Но сейчас я уже спокоен и пишу, что думаю, что думал всегда и буду думать до тех пор пока мы вместе, пока я способен дать тебе то, что ты заслуживаешь, как минимум счастье!! Если вспомнить как всё начиналось, то я даже представить себе не мог, что всё может сложиться именно так! Впервые когда я увидел тебя, я подумал КАКАЯ КРАСИВАЯ КРАСОТОЧКА, А ЭТА ТОЧНА Я ЕЙ ПОНРАВИЛСЯ ВАПЩЕ😳😳😳???!!! И не только это!! Потом когда мы уже общались, я многое для себя подметил и посчитал, что готов быть с такой прекрасной девушкой как ты! Готов полюбить всем сердцем! Помню я тогда я ещё сказал тебе, что я не романтичный и ты так отреагировала интересно, но я так понимаю ты тогда волновалась и отвечала на любые мои минусы так, что всё прекрасно!! Потом всё это начало всплывать, я начал чувствовать себя ужасно, потому что закрыл на это глаза и подумал, что тебя всё устраивает, но я ошибался, поэтому начал что-то предпринимать, хотя потом вообще выяснилось, что я почему-то романтичный, я в общем совсем запутался!! УЖАС КАКОЙ-ТО, я единственное, что понял, так это то, что Я ТЕБЯ ПИЗДЕЦ КАК СИЛЬНО ЛЮБЛЮ, ТЫ У МЕНЯ САМАЯ ЛЮБИМАЯ НА СВЕТЕ, СОНЕЧКА!! ААААААААА!! Так что позволь сделать тебя счастливой!! Я очень хочу чтобы ты была счастлива, ТЫ НЕВЕРОЯТНАЯ ЖЕНЩИНА. ОБОЖАЮ ТЕБЯ ВСЕМ СЕРДЦЕМ И ДУШОЙ!! Ещё миллион раз скажу тебе как сильно я тебя люблю!!💖💖💖 Ты - чудо!!! Будь счастлива и если удастся, то хотелось бы стать твоим счастьем! А ты будь моим, ты уже делаешь меня невероятно счастливым!! УАООМУОАОУОМУМОУ ЛЮБЛЮЮЮЮЮЮЮЮЮЮЮЮю тибяяя💖💖!!</p>
                <p className='note-content'>плин.. я уже не знаю, что ещё написать, ну я ещё многое скажу тебе!! Дафай что ле.... зацелую тебя жоска и заобнимаю, я так-то рядом стою и смотрю как ты всё это читаешь😳😳😳</p>
                <img src={cat} alt="" />
            </div>
        </div>
    );
};

export default EndScreen;
