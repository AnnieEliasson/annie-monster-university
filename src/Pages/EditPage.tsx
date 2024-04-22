import React, { useContext, useState } from "react";
import {
  Monster,
  MonsterContext,
} from "../Components/ContextProvider/MonsterContextProvider";
import { Link } from "react-router-dom";

type PropList = {
  editMonster: Monster;
  setEdit: any;
};

const EditPage = ({ editMonster, setEdit }: PropList) => {
  const { dispatch } = useContext(MonsterContext);
  const [hasHorn, setHasHorn] = useState(false);
  const [monster, setMonster] = useState<Monster>(editMonster);

  const handleClick = () => {
    console.log(monster);
    dispatch({ type: "EDIT", payload: monster });
    setEdit(false);
  };

  const handleOnChangeHorns = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "ja") {
      setHasHorn(true);
      setMonster({
        ...monster,
        appearance: {
          ...monster.appearance,
          horn: { ...monster.appearance.horn, hasHorn: true },
        },
      });
    } else {
      setHasHorn(false);
    }
  };

  return (
    <div className="EditPage-container">
      <div className="EditPage edit">
        <fieldset className="form">
          <legend>Ändra student</legend>
          <label htmlFor="förnamn">
            Förnamn:{" "}
            <input
              value={monster.firstName}
              onChange={(e) => {
                setMonster({ ...monster, firstName: e.target.value });
              }}
              type="text"
              placeholder="Förnamn"
              id="förnamn"
            />
          </label>
          <label htmlFor="efternamn">
            Efternamn:{" "}
            <input
              value={monster.lastNamn}
              onChange={(e) => {
                setMonster({ ...monster, lastNamn: e.target.value });
              }}
              type="text"
              placeholder="Efternamn"
              id="efternamn"
            />
          </label>
          <label htmlFor="program">
            Program:{" "}
            <select
              value={monster.program}
              onChange={(e) => {
                setMonster({ ...monster, program: e.target.value });
              }}
              name="program"
              id="program"
            >
              <option value="">Välj program</option>
              <option value="Mörk Magi och Mystik">Mörk Magi och Mystik</option>
              <option value="Monsterbiologi och Ekologi">
                Monsterbiologi och Ekologi
              </option>
              <option value="Mystiska Konstformer och Kreativitet">
                Mystiska Konstformer och Kreativitet
              </option>
              <option value="Luftfart och Flygteknik">
                Luftfart och Flygteknik
              </option>
              <option value="Monsterpsykologi och Kommunikation">
                Monsterpsykologi och Kommunikation
              </option>
              <option value="Monstervård och Läkekonst">
                Monstervård och Läkekonst
              </option>
            </select>
          </label>
          <label htmlFor="hemstad">
            Hemstad:{" "}
            <input
              value={monster.homeTown}
              onChange={(e) => {
                setMonster({ ...monster, homeTown: e.target.value });
              }}
              type="text"
              placeholder="Hemstad"
              id="hemstad"
            />
          </label>
          <label htmlFor="ögon">
            Antal ögon:{" "}
            <input
              value={monster.appearance.eyes}
              onChange={(e) => {
                setMonster({
                  ...monster,
                  appearance: {
                    ...monster.appearance,
                    eyes: Number(e.target.value),
                  },
                });
              }}
              type="number"
              name="ögon"
              id="ögon"
              placeholder="Antal ögon"
            />
          </label>
          <label htmlFor="tentakler">
            {" "}
            Antal tentakler:{" "}
            <input
              value={monster.appearance.tentacles}
              onChange={(e) => {
                setMonster({
                  ...monster,
                  appearance: {
                    ...monster.appearance,
                    tentacles: Number(e.target.value),
                  },
                });
              }}
              type="number"
              name="tentakler"
              id="tentakler"
              placeholder="Antal tentakler"
            />
          </label>
          <label htmlFor="färg">
            Färg:{" "}
            <input
              value={monster.appearance.color}
              onChange={(e) => {
                setMonster({
                  ...monster,
                  appearance: {
                    ...monster.appearance,
                    color: e.target.value,
                  },
                });
              }}
              type="text"
              placeholder="Färg"
              id="färg"
            />
          </label>
          <label htmlFor="hud/päls">
            Hud/Päls:{" "}
            <input
              value={monster.appearance.skin}
              onChange={(e) => {
                setMonster({
                  ...monster,
                  appearance: {
                    ...monster.appearance,
                    skin: e.target.value,
                  },
                });
              }}
              type="text"
              placeholder="Hud/Päls"
              id="hud/päls"
            />
          </label>

          <fieldset>
            <label htmlFor="radios">Horn: </label>
            <div className="radios" id="radios">
              <label htmlFor="ja">Ja</label>
              <input
                onChange={(e) => handleOnChangeHorns(e)}
                type="radio"
                name="horn"
                id="ja"
              />
              <label htmlFor="nej">Nej</label>
              <input
                onChange={(e) => handleOnChangeHorns(e)}
                type="radio"
                name="horn"
                id="nej"
              />
            </div>
            <br />
          </fieldset>
          {hasHorn ? (
            <label htmlFor="horn-description">
              Horn beskrivning:
              <input
                value={monster.appearance.horn.description}
                onChange={(e) => {
                  setMonster({
                    ...monster,
                    appearance: {
                      ...monster.appearance,
                      horn: {
                        ...monster.appearance.horn,
                        description: e.target.value,
                      },
                    },
                  });
                }}
                id="horn-description"
                type="text"
                placeholder="Beskrivning av hornen"
              />
            </label>
          ) : (
            ""
          )}
          <label htmlFor="hobby">
            Hobbys: <input type="text" placeholder="Hobby" id="hobby" />
          </label>
          <Link to={`/student-register/${monster.id}`}>
            <button onClick={handleClick}>Spara ändringar</button>
          </Link>
        </fieldset>
      </div>
    </div>
  );
};

export default EditPage;
