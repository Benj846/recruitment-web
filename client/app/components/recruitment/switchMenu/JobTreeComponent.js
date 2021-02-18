import React, { useState, useRef } from 'react';
import '../../../styles/JobTreeComponent';
//import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks';
import { gql, useQuery } from '@apollo/client';
const GET_LV1_WORK = gql`
  {
    getDefaultWork(LV: 1) {
      ID
      LV
      VAL
      UPPER_ID
    }
  }
`;
const GET_LV2_WORK = gql`
  query getVariableLv2($lv1id: Int) {
    getLevelWork(ID: $lv1id, LV: 2) {
      ID
      LV
      VAL
    }
  }
`;
const GET_LV3_WORK = gql`
  query getVariableLv2($lv1id: Int) {
    getLevelWork(ID: $lv1id, LV: 3) {
      ID
      LV
      VAL
    }
  }
`;
const GET_LV4_WORK = gql`
  query getVariableLv2($lv1id: Int) {
    getLevelWork(ID: $lv1id, LV: 4) {
      ID
      LV
      VAL
    }
  }
`;
function JobTreeComponent(props) {
  const appendRef = useRef(null);
  const [lvl1, setLvl1] = useState('');
  const [lvl2, setLvl2] = useState(null);
  const [lvl3, setLvl3] = useState(null);
  const [curLvl, setCurLvl] = useState(1);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [LV_1_ID, setLV_1_ID] = useState();
  const [LV_2_ID, setLV_2_ID] = useState();
  const [LV_3_ID, setLV_3_ID] = useState();
  const [LV_4_ID, setLV_4_ID] = useState();
  const [isActive, setIsActive] = useState(false);
  const [newArray, setNewArray] = useState();
  // const [active3, setActive3] = useState(false);

  const { data, error, loading } = useQuery(GET_LV1_WORK);

  const {
    data: LV2Data,
    error: LV2Error,
    loading: LV2Loading
  } = useQuery(GET_LV2_WORK, { variables: { lv1id: LV_1_ID } });

  const {
    data: LV3Data,
    error: LV3Error,
    loading: LV3Loading
  } = useQuery(GET_LV3_WORK, { variables: { lv1id: LV_2_ID } });

  const {
    data: LV4Data,
    error: LV4Error,
    loading: LV4Loading
  } = useQuery(GET_LV4_WORK, { variables: { lv1id: LV_3_ID } });

  const LV3Render = () => {
    const dataAddr = LV3Data.getLevelWork.map((data) => ({
      ...data,
      isActive: false
    }));
    console.log(dataAddr);
    setNewArray(dataAddr);
    console.log(newArray);
  };

  return (
    <>
      {/* {LV3Render} */}
      <div className="job-tree-cont">
        {/* Level 1  */}
        <div className="button-container">
          {loading && 'loading'}
          {error && `error message : ${error.message}`}
          {!loading &&
            data.getDefaultWork.map(({ ID, VAL }) => (
              <button
                key={ID}
                className={`lvl1 ${lvl1 === ID ? 'active' : ''}`}
                onClick={() => {
                  setCurLvl(2);
                  setLvl1(ID);
                  setActive2(false);
                  setLV_1_ID(ID);
                }}
              >
                {VAL}
                {/* {LV_1_ID} */}
              </button>
            ))}
        </div>
        {/* Level 2  */}
        <div className="button-container">
          {LV2Loading && 'loading'}
          {LV2Error && `error check console ${console.log(LV2Error.message)}`}
          {!LV2Loading &&
            LV2Data.getLevelWork.map(({ ID, VAL }) => (
              <button
                key={ID}
                className={`lvl2 ${
                  lvl2 === ID && active2 && curLvl >= 2 ? 'active' : null
                }`}
                disabled={false}
                onClick={() => {
                  LV3Render();
                  setCurLvl(3);
                  setActive2(true);
                  setLV_2_ID(ID);
                  setLvl2(ID);
                }}
              >
                {VAL}
              </button>
            ))}
        </div>

        {/* Level 3  */}
        <div className="btn-bubble-cont">
          {LV3Loading && 'loading'}
          {LV3Error && `error check console ${console.log(LV3Error.message)}`}
          {!LV3Loading &&
            LV3Data.getLevelWork.map(({ ID, VAL, isActive }) => (
              <button
                key={ID}
                className={`last ${lvl2 === ID ? 'active' : null}`}
                // disabled={false}
                onClick={() => {
                  setCurLvl(3);
                  setActive2(true);
                  // setIsActive(!isActive);
                  setLV_3_ID(ID);
                  setLvl2(ID);
                }}
              >
                <span className="bubble">{VAL}</span>
              </button>
            ))}
        </div>
        <div className="btn-bubble-cont">
          {LV4Loading && 'loading'}
          {LV4Error && `error check console ${console.log(LV4Error.message)}`}
          {!LV4Loading &&
            LV4Data.getLevelWork.map(({ ID, VAL }) => (
              <button
                key={ID}
                className={`last ${lvl2 === ID ? 'active' : null}`}
                // disabled={false}
                onClick={() => {
                  setCurLvl(3);
                  setActive2(true);
                  // setIsActive(!isActive);
                  setLvl2(ID);
                }}
              >
                <span className="bubble">{VAL}</span>
              </button>
            ))}
        </div>
        <section ref={appendRef} className="ad-content-append">
          <div>선택된 버블이 추가되는 영역</div>
          <button className="btn-confirm">선택완료</button>
        </section>
      </div>
    </>
  );
}
export default JobTreeComponent;
