import React, { ReactEventHandler, useState } from 'react';
import classNames from 'classnames';
import './App.scss';

const trueAnswers = ['wyższa', 'piękniejszy', 'droższy', 'mniejszy', 'większy', 'niższy', 'ładniejsza'];

export const App = () => {
  const [first, setFirst] = useState('');
  const [counterOne, setCounterOne] = useState(0);
  const [second, setSecond] = useState('');
  const [counterTwo, setCounterTwo] = useState(0);
  const [third, setThird] = useState('');
  const [counterThree, setCounterThree] = useState(0);
  const [fourth, setFourth] = useState('');
  const [counterFour, setCounterFour] = useState(0);
  const [fifth, setFifth] = useState('');
  const [counterFive, setCounterFive] = useState(0);
  const [sixth, setSixth] = useState('');
  const [counterSix, setCounterSix] = useState(0);
  const [seventh, setSeventh] = useState('');
  const [counterSeven, setCounterSeven] = useState(0);

  const checker = (
    event: any,
    correct: string,
    state: string,
    setter: any,
    count: number
  ) => {
    event.preventDefault();
    console.log(event.target.value);
    console.log(state);
    if (correct === state) {
      setter(correct)
    } else {
      setter((el: number) => el + 1);
    }
  }

  return (
    <section className='test'>
      <div className='test__description description'>
        <div className='description'>
          <div className='description__number'>
            <p className='description__number-txt'>1.5</p>
          </div>
          <div>
            <h3>Proszę napisać poprawną formę przymiotnika😊</h3>
            <i>(Напишіть правильну форму прикметника)</i>
          </div>
        </div>
      </div>
      <div className='test__content content'>
        <div className='content__note'>
          <p className='content__note-one'>Przykład:</p>
          <p className='content__note-two two'>Książka jest <span className='two__span'>lepsza</span> niż film.</p>
        </div>
        <ul className='content__list list'>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Anka jest <span>(wysoka)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[0], first, setCounterOne, counterOne)}
              >
                <input
                  onChange={(event) => {
                    setFirst(event.target.value);
                  }}
                  value={first}
                  className={classNames({
                    'select__own': true,
                    'done': first === trueAnswers[0],
                    'incorrectly': counterOne > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__one': counterOne > 2,
                })}>
                </div>
                <div className={classNames({
                  'check__one': counterOne > 1,
                })}>
                </div>
                <div className={classNames({
                  'check__one': counterOne > 0,
                })}>
                </div>
              </div>
            </div>
            <p>niż Tom.</p>
          </li>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Ten taniec jest <span>(piękny)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[1], second, setCounterTwo, counterTwo)}
              >
                <input

                  onChange={(event) => {
                    setSecond(event.target.value);
                  }}
                  value={counterTwo > 2 ? second : undefined}
                  className={classNames({
                    'select__own': true,
                    'done': second === trueAnswers[1],
                    'incorrectly': counterTwo > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__two': counterTwo > 2,
                })}></div>
                <div className={classNames({
                  'check__two': counterTwo > 1,
                })}></div>
                <div className={classNames({
                  'check__two': counterTwo > 0,
                })}></div>
              </div>
            </div>
            <p>niż poprzedni.</p>
          </li>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Mój szalik jest <span>(drogi)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[2], third, setCounterThree, counterThree)}
              >
                <input
                  onChange={(event) => {
                    setThird(event.target.value);
                  }}
                  value={counterThree > 2 ? third : undefined}
                  className={classNames({
                    'select__own': true,
                    'done': third === trueAnswers[2],
                    'incorrectly': counterThree > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__three': counterThree > 2,
                })}></div>
                <div className={classNames({
                  'check__three': counterThree > 1,
                })}></div>
                <div className={classNames({
                  'check__three': counterThree > 0,
                })}></div>
              </div>
            </div>
            <p>od twojego.</p>
          </li>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Zielony plecak jest<span>(mały)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[3], fourth, setCounterFour, counterFour)}
              >
                <input
                  onChange={(event) => {
                    setFourth(event.target.value);
                  }}
                  value={counterFour > 2 ? fourth : undefined}
                  className={classNames({
                    'select__own': true,
                    'done': fourth === trueAnswers[3],
                    'incorrectly': counterFour > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__four': counterFour > 2,
                })}></div>
                <div className={classNames({
                  'check__four': counterFour > 1,
                })}></div>
                <div className={classNames({
                  'check__four': counterFour > 0,
                })}></div>
              </div>
            </div>
            <p>od żółtego.</p>
          </li>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Dom mojej przyjaciółki jest <span>(duży)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[4], fifth, setCounterFive, counterFive)}
              >
                <input
                  onChange={(event) => {
                    setFifth(event.target.value);
                  }}
                  value={counterFive > 2 ? fifth : undefined}
                  className={classNames({
                    'select__own': true,
                    'done': fifth === trueAnswers[4],
                    'incorrectly': counterFive > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__five': counterFive > 2,
                })}></div>
                <div className={classNames({
                  'check__five': counterFive > 1,
                })}></div>
                <div className={classNames({
                  'check__five': counterFive > 0,
                })}></div>
              </div>
            </div>
            <p>od mojego.</p>
          </li>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Mój kuzyn jest <span>(niski)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[5], sixth, setCounterSix, counterSix)}
              >
                <input
                  onChange={(event) => {
                    setSixth(event.target.value);
                  }}
                  value={counterSix > 2 ? sixth : undefined}
                  className={classNames({
                    'select__own': true,
                    'done': sixth === trueAnswers[5],
                    'incorrectly': counterSix > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__six': counterSix > 2,
                })}></div>
                <div className={classNames({
                  'check__six': counterSix > 1,
                })}></div>
                <div className={classNames({
                  'check__six': counterSix > 0,
                })}></div>
              </div>
            </div>
            <p>niż moja kuzynka.</p>
          </li>
          <li className='list__box'>
            <p className='list__box-txt'>💛 Moja sukienka jest <span>(ładna)</span></p>
            <div className='list__box-select select'>
              <form
                onSubmit={(event) => checker(event, trueAnswers[6], seventh, setCounterSeven, counterSeven)}
              >
                <input
                  onChange={(event) => {
                    setSeventh(event.target.value);
                  }}
                  value={counterSeven > 2 ? seventh : undefined}
                  className={classNames({
                    'select__own': true,
                    'done': seventh === trueAnswers[6],
                    'incorrectly': counterSeven > 2
                  })}
                />
              </form>
              <div className='select__check check'>
                <div className={classNames({
                  'check__seven': counterSeven > 2,
                })}></div>
                <div className={classNames({
                  'check__seven': counterSeven > 1,
                })}></div>
                <div className={classNames({
                  'check__seven': counterSeven > 0,
                })}></div>
              </div>
            </div>
            <p>niż twoja.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
