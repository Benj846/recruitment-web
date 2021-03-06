import React, { useState, useRef } from 'react';
import icon_search from './logo_and_images/icon_search_40px.png';
import icon_arrow_down from './logo_and_images/icon_arrow_down_40px.png';
import icon_close_green from './logo_and_images/icon_close.png';
import '../../styles/EducationComponent';

function EducationComponent({
  resumeInfo,
  onChange,
  onClick,
  onAddMajor,
  onRemoveMajor
}) {
  const [value, setValue] = useState();
  const [isIntegratedChecked, setIsIntegratedChecked] = useState(false);
  const [isMasterClicked, setIsMasterClicked] = useState(false);

  const handleCheckBoxChange = () => {
    const checked = !isIntegratedChecked;
    setIsIntegratedChecked(checked);
    const result = <Doctorate isIntegratedChecked={checked} />;
    setValue(result);
  };

  const [flag, setFlag] = useState();
  const onChangeEdu = (e) => {
    //const targetValue = e.target.value;
    const flag = e.target.value;
    setFlag(flag);
    setIsMasterClicked(false);
  };

  const printEducation = () => {
    switch (flag) {
      case '0':
        return (
          <HighSchool
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
          />
        );
      case '1':
        return (
          <College
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '3':
        return (
          <Transfer
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '2':
        return (
          <University
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '4':
        return (
          <Master
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
      case '5':
        setIsMasterClicked(true);
        return (
          <Doctorate
            onChange={onChange}
            onClick={onClick}
            resumeInfo={resumeInfo}
            onAddMajor={onAddMajor}
            onRemoveMajor={onRemoveMajor}
          />
        );
    }
  };

  return (
    <div className="education-info">
      <span className="education-title">????????????</span>
      <hr className="division-line" />
      <div className="first-row content-row">
        <div className="final-content content-col">
          <span className="content-title">????????????</span>
          <select
            className="select-education"
            defaultValue="non-value"
            onChange={(e) => {
              onChangeEdu(e);
              onChange(e);
            }}
            style={{ background: `url(${icon_arrow_down}) no-repeat 100% 0` }}
            name="etype"
          >
            <option value="non-value" disabled="disabled">
              ??????????????? ??????????????????
            </option>
            <option value="0">??????</option>
            <option value="1">?????????</option>
            <option value="3">??????</option>
            <option value="2">??????</option>
            <option value="4">??????</option>
            <option value="5">??????</option>
          </select>
        </div>
        {isMasterClicked ? (
          <>
            <div className="integrated" onClick={handleCheckBoxChange}>
              <input
                type="checkbox"
                checked={isIntegratedChecked}
                onChange={handleCheckBoxChange}
                id="a1"
              />
              <label className="el-checkbox-style" htmlFor="a1"></label>
              <span className="integrated-title">????????? ????????????</span>
            </div>
          </>
        ) : null}
      </div>
      <div className="added-education">{printEducation()}</div>
    </div>
  );
}

function HighSchool({ onChange, onClick, resumeInfo }) {
  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">????????????</span>
          </div>
          <div className="name-school content-col">
            <span className="content-title">?????????</span>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
              name="school"
              onChange={onChange}
            >
              <option value="default-value" disa-bled="disabled">
                ??????
              </option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="????????????">????????????</option>
              <option value="?????????">?????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="edsmonth"
                onChange={onChange}
              ></input>
              <input
                type="month"
                className="in-school-period-input"
                name="edemonth"
                onChange={onChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
              name="edregion"
              onChange={onChange}
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <select
              className="select-major"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
              className="select-major"
              name="edmajor"
              onChange={onChange}
            >
              <option value="????????????">????????????</option>
              <option value="????????????">????????????</option>
              <option value="??????">??????</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

function College({ onChange, onClick, resumeInfo, onAddMajor, onRemoveMajor }) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds(ids.concat(id));
    //setLastId(id);
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    const newIds = ids.filter((id) => id !== selectedId);
    setIds(newIds);
    //setLastId(newIds[newIds.length - 1]);
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">?????????</span>
          </div>
          <div className="name-school content-col">
            <span className="content-title">?????????</span>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
              name="school"
              onChange={onChange}
            >
              <option value="default-value" disabled="disabled">
                ??????
              </option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="???????????????">???????????????</option>
              <option value="??????????????????">??????????????????</option>
              <option value="???????????????">???????????????</option>
              <option value="?????????">?????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="edsmonth"
                onChange={onChange}
              />
              <input
                type="month"
                className="in-school-period-input"
                name="edemonth"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              onChange={onChange}
              name="edregion"
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="non-value"
                name="edmajor"
                onChange={onAddMajor}
              >
                <option value="non-value">??????</option>
                <option value="?????????">?????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="?????????">?????????</option>
                <option value="??????/???????????????">??????/???????????????</option>
                <option value="?????????/???????????????">?????????/???????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button className="add-major" onClick={onCreate}>
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor
          ids={ids}
          onRemove={onRemove}
          onCreate={onCreate}
          onAddMajor={onAddMajor}
          onRemoveMajor={onRemoveMajor}
        />{' '}
      </div>
    </>
  );
}

function AddedMajor({ ids, order, onRemove, onAddMajor, onRemoveMajor }) {
  return ids.map((id) => (
    <div key={id} className="major-content-add content-col">
      <div className="content-title">????????????</div>
      <div className="select-add-wrap">
        <select
          className="select-major"
          defaultValue="non-value"
          name="edmajor"
          onChange={onAddMajor}
        >
          <option value="non-value" disabled={true}>
            ??????
          </option>
          <option value="?????????">?????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="????????????">????????????</option>
          <option value="?????????">?????????</option>
          <option value="??????/???????????????">??????/???????????????</option>
          <option value="?????????/???????????????">?????????/???????????????</option>
          <option value="????????????">????????????</option>
        </select>
        <button
          className="close-info"
          style={{ background: `url(${icon_close_green}) no-repeat 0 center` }}
          onClick={(e) => {
            onRemove(id, order);
            onRemoveMajor(e);
          }}
        >
          ??????
        </button>
      </div>
    </div>
  ));
}

function Transfer({
  onChange,
  onClick,
  resumeInfo,
  onAddMajor,
  onRemoveMajor
}) {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const refId = useRef([0, 0]);
  const firstArea = 0;
  const secondArea = 1;
  const onCreate = (index) => {
    const id = refId.current[index];
    if (index === firstArea) {
      setIdsOne([...idsOne, id]);
    } else if (index === secondArea) {
      setIdsTwo([...idsTwo, id]);
    }
    refId.current[index] += 1;
  };

  const onRemove = (selectedId, order) => {
    if (order === firstArea) {
      const newIds = idsOne.filter((id) => id !== selectedId);
      setIdsOne(newIds);
    } else if (order === secondArea) {
      const newIds = idsTwo.filter((id) => id !== selectedId);
      setIdsTwo(newIds);
    }
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">?????????</span>
            <span className="content-title">(?????? ???)</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">?????????</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
              name="beforetrans"
              onChange={onChange}
            >
              <option value="default-value" disabled="disabled">
                ??????
              </option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="????????????">????????????</option>
              <option value="?????????">?????????</option>
              <option value="???????????????">???????????????</option>
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
              <option value="????????????">????????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="beforetrans_smonth"
              />
              <input
                type="month"
                className="in-school-period-input"
                name="beforetrans_emonth"
              />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
              onChange={onChange}
              name="beforetrans_region"
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="non-value"
                name="beforetrans_major"
                onChange={onAddMajor}
              >
                <option value="non-value" disabled={true}>
                  ??????
                </option>
                <option value="?????????">?????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="?????????">?????????</option>
                <option value="??????/???????????????">??????/???????????????</option>
                <option value="?????????/???????????????">?????????/???????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button className="add-major" onClick={() => onCreate(firstArea)}>
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

        <div className="first-row content-row after-transfer">
          <div className="level">
            <span className="content-title">?????????</span>
            <span className="content-title">(?????? ???)</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">?????????</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                ???????????????
              </option>
              <option value="2">?????????</option>
              <option value="3">????????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="????????????"
              >
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button
                className="add-major"
                onClick={() => onCreate(secondArea)}
              >
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
      </div>
    </>
  );
}

function University({
  onChange,
  onClick,
  resumeInfo,
  onAddMajor,
  onRemoveMajor
}) {
  const [ids, setIds] = useState([]);
  const refId = useRef(0);
  const onCreate = () => {
    const id = refId.current;
    setIds([...ids, id]);
    refId.current += 1;
  };

  const onRemove = (selectedId) => {
    const newIds = ids.filter((id) => id !== selectedId);
    setIds(newIds);
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">?????????</span>
          </div>
          <div className="name-school content-col">
            <span className="content-title">?????????</span>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
              name="university"
              onChange={onChange}
            >
              <option value="default-value" disabled="disabled">
                ??????
              </option>
              <option value="?????????">?????????</option>
              <option value="????????????">????????????</option>
              <option value="????????????">????????????</option>
            </select>
          </div>

          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input
                type="month"
                className="in-school-period-input"
                name="uni_smonth"
                onChange={onChange}
              />
              <input
                type="month"
                className="in-school-period-input"
                name="uni_emonth"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <span className="content-title">?????????</span>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
              onChange={onChange}
              name="uni_region"
            >
              <option value="default-value">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>

          <div className="major-content content-col">
            <span className="content-title">????????????</span>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="non-value"
                name="uni_major"
                onChange={onAddMajor}
              >
                <option value="non-value">??????</option>
                <option value="?????????">?????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
                <option value="?????????">?????????</option>
                <option value="??????/???????????????">??????/???????????????</option>
                <option value="?????????/???????????????">?????????/???????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button className="add-major" onClick={onCreate}>
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={ids} onRemove={onRemove} onAddMajor={onAddMajor} />
      </div>
    </>
  );
}

function Master() {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const refId = useRef([0, 0]);
  const firstArea = 0;
  const secondArea = 1;
  const onCreate = (index) => {
    const id = refId.current[index];
    if (index === firstArea) {
      setIdsOne([...idsOne, id]);
    } else if (index === secondArea) {
      setIdsTwo([...idsTwo, id]);
    }
    refId.current[index] += 1;
  };

  const onRemove = (selectedId, order) => {
    if (order === firstArea) {
      const newIds = idsOne.filter((id) => id !== selectedId);
      setIdsOne(newIds);
    } else if (order === secondArea) {
      const newIds = idsTwo.filter((id) => id !== selectedId);
      setIdsTwo(newIds);
    }
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">?????????</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">?????????</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                ???????????????
              </option>
              <option value="2">?????????</option>
              <option value="3">????????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="????????????"
              >
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button className="add-major" onClick={() => onCreate(firstArea)}>
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

        <div className="first-row content-row after-transfer">
          <div className="level">
            <span className="content-title">?????????</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">?????????</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                ???????????????
              </option>
              <option value="2">?????????</option>
              <option value="3">????????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="????????????"
              >
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button
                className="add-major"
                onClick={() => onCreate(secondArea)}
              >
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
      </div>
    </>
  );
}

function Doctorate({ isIntegratedChecked }) {
  const [idsOne, setIdsOne] = useState([]);
  const [idsTwo, setIdsTwo] = useState([]);
  const [idsThree, setIdsThree] = useState([]);
  const refId = useRef([0, 0, 0]);
  const firstArea = 0;
  const secondArea = 1;
  const thirdArea = 2;
  const onCreate = (index) => {
    const id = refId.current[index];
    if (index === firstArea) {
      setIdsOne([...idsOne, id]);
    } else if (index === secondArea) {
      setIdsTwo([...idsTwo, id]);
    } else {
      setIdsThree([...idsThree, id]);
    }
    refId.current[index] += 1;
  };

  const onRemove = (selectedId, order) => {
    if (order === firstArea) {
      const newIds = idsOne.filter((id) => id !== selectedId);
      setIdsOne(newIds);
    } else if (order === secondArea) {
      const newIds = idsTwo.filter((id) => id !== selectedId);
      setIdsTwo(newIds);
    } else {
      const newIds = idsThree.filter((id) => id !== selectedId);
      setIdsThree(newIds);
    }
  };

  return (
    <>
      <div className="education-container">
        <div className="first-row content-row">
          <div className="level">
            <span className="content-title">?????????</span>
          </div>
          <div className="name-school content-col">
            <div className="content-title">?????????</div>
            <select
              className="title-input"
              style={{
                background: `url(${icon_search}) no-repeat 98% center`,
                backgroundSize: `32px 32px`
              }}
              defaultValue="default-value"
            >
              <option value="default-value" disabled="disabled">
                ???????????????
              </option>
              <option value="2">?????????</option>
              <option value="3">????????????</option>
            </select>
          </div>
          <div className="in-school-period content-col">
            <span className="content-title">????????????</span>
            <div className="input-wrapper">
              <input type="month" className="in-school-period-input" />
              <input type="month" className="in-school-period-input" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="location content-col">
            <div className="location-title content-title">?????????</div>
            <select
              className="location-input"
              style={{
                background: `url(${icon_arrow_down}) no-repeat 100% 0`
              }}
              defaultValue="default-value"
            >
              <option value="default-value"></option>
              <option value="??????">??????</option>
              <option value="??????">??????</option>
            </select>
          </div>
          <div className="major-content content-col">
            <div className="major-name content-title">????????????</div>
            <div className="select-add-wrap">
              <select
                className="select-major"
                style={{
                  background: `url(${icon_arrow_down}) no-repeat 100% 0`
                }}
                defaultValue="????????????"
              >
                <option value="????????????">????????????</option>
                <option value="????????????">????????????</option>
              </select>
              <button className="add-major" onClick={() => onCreate(firstArea)}>
                ????????????
              </button>
            </div>
          </div>
        </div>
        <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

        {isIntegratedChecked ? (
          <>
            <div className="education-container">
              <div className="first-row content-row">
                <div className="level">
                  <span className="content-title">?????????</span>
                  <span className="content-title">(?????????)</span>
                </div>
                <div className="name-school content-col">
                  <div className="content-title">?????????</div>
                  <select
                    className="title-input"
                    style={{
                      background: `url(${icon_search}) no-repeat 98% center`,
                      backgroundSize: `32px 32px`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value" disabled="disabled">
                      ???????????????
                    </option>
                    <option value="2">?????????</option>
                    <option value="3">????????????</option>
                  </select>
                </div>
                <div className="in-school-period content-col">
                  <span className="content-title">????????????</span>
                  <div className="input-wrapper">
                    <input type="month" className="in-school-period-input" />
                    <input type="month" className="in-school-period-input" />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="location content-col">
                  <div className="location-title content-title">?????????</div>
                  <select
                    className="location-input"
                    style={{
                      background: `url(${icon_arrow_down}) no-repeat 100% 0`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value"></option>
                    <option value="??????">??????</option>
                    <option value="??????">??????</option>
                  </select>
                </div>
                <div className="major-content content-col">
                  <div className="major-name content-title">????????????</div>
                  <div className="select-add-wrap">
                    <select
                      className="select-major"
                      style={{
                        background: `url(${icon_arrow_down}) no-repeat 100% 0`
                      }}
                      defaultValue="????????????"
                    >
                      <option value="????????????">????????????</option>
                      <option value="????????????">????????????</option>
                    </select>
                    <button
                      className="add-major"
                      onClick={() => onCreate(secondArea)}
                    >
                      ????????????
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
          </>
        ) : (
          <>
            <div className="education-container">
              <div className="first-row content-row">
                <div className="level">
                  <span className="content-title">?????????(??????)</span>
                </div>
                <div className="name-school content-col">
                  <div className="content-title">?????????</div>
                  <select
                    className="title-input"
                    style={{
                      background: `url(${icon_search}) no-repeat 98% center`,
                      backgroundSize: `32px 32px`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value" disabled="disabled">
                      ???????????????
                    </option>
                    <option value="2">?????????</option>
                    <option value="3">????????????</option>
                  </select>
                </div>
                <div className="in-school-period content-col">
                  <span className="content-title">????????????</span>
                  <div className="input-wrapper">
                    <input type="month" className="in-school-period-input" />
                    <input type="month" className="in-school-period-input" />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="location content-col">
                  <div className="location-title content-title">?????????</div>
                  <select
                    className="location-input"
                    style={{
                      background: `url(${icon_arrow_down}) no-repeat 100% 0`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value"></option>
                    <option value="??????">??????</option>
                    <option value="??????">??????</option>
                  </select>
                </div>
                <div className="major-content content-col">
                  <div className="major-name content-title">????????????</div>
                  <div className="select-add-wrap">
                    <select
                      className="select-major"
                      style={{
                        background: `url(${icon_arrow_down}) no-repeat 100% 0`
                      }}
                      defaultValue="????????????"
                    >
                      <option value="????????????">????????????</option>
                      <option value="????????????">????????????</option>
                    </select>
                    <button
                      className="add-major"
                      onClick={() => onCreate(firstArea)}
                    >
                      ????????????
                    </button>
                  </div>
                </div>
              </div>
              <AddedMajor ids={idsOne} order={firstArea} onRemove={onRemove} />

              <div className="first-row content-row after-transfer">
                <div className="level">
                  <span className="content-title">?????????(??????)</span>
                </div>
                <div className="name-school content-col">
                  <div className="content-title">?????????</div>
                  <select
                    className="title-input"
                    style={{
                      background: `url(${icon_search}) no-repeat 98% center`,
                      backgroundSize: `32px 32px`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value" disabled="disabled">
                      ???????????????
                    </option>
                    <option value="2">?????????</option>
                    <option value="3">????????????</option>
                  </select>
                </div>
                <div className="in-school-period content-col">
                  <span className="content-title">????????????</span>
                  <div className="input-wrapper">
                    <input type="month" className="in-school-period-input" />
                    <input type="month" className="in-school-period-input" />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="location content-col">
                  <div className="location-title content-title">?????????</div>
                  <select
                    className="location-input"
                    style={{
                      background: `url(${icon_arrow_down}) no-repeat 100% 0`
                    }}
                    defaultValue="default-value"
                  >
                    <option value="default-value"></option>
                    <option value="??????">??????</option>
                    <option value="??????">??????</option>
                  </select>
                </div>
                <div className="major-content content-col">
                  <div className="major-name content-title">????????????</div>
                  <div className="select-add-wrap">
                    <select
                      className="select-major"
                      style={{
                        background: `url(${icon_arrow_down}) no-repeat 100% 0`
                      }}
                      defaultValue="????????????"
                    >
                      <option value="????????????">????????????</option>
                      <option value="????????????">????????????</option>
                    </select>
                    <button
                      className="add-major"
                      onClick={() => onCreate(secondArea)}
                    >
                      ????????????
                    </button>
                  </div>
                </div>
              </div>
              <AddedMajor ids={idsTwo} order={secondArea} onRemove={onRemove} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default EducationComponent;
