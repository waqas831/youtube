import React from "react";
import Youtube from "../../../../src/youtube.png";
interface Props {
  videosList: any
}

const ShowMainListItems = ({ videosList }: Props) => {
  const gotoDetailPage = () => {
    console.log('detail page')
  }
  return (
    <>
      <div className="flex justify-between w-full flex-wrap" style={{ margin: '2% auto',background:'#F9F9F9' }}>
        {videosList.map((videosList: any, index: any) => {
          return (

            <div style={{ width: "23%", marginBottom: '60px' }} onClick={gotoDetailPage}>
              <img src={Youtube} alt="youtube" height="450px" width="100%" 
              style={{ marginBottom: '10px' }} />
              <div className="flex justify-between">
                <div className="flex"
                  style={{ borderRadius: "100px", height: '70px' }}>
                  <img
                    src={Youtube}
                    alt="youtube"
                    width="50px"
                    height="30px"
                    style={{ borderRadius: "50%", }}
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="post_title text-2xl"
                   >Main Tera Hona Laga hOON |Atif Aslam |kUMAR sANU</h3>
                  <h5 style={{fontSize:'16px',fontWeight:400}}>web 3</h5>
                  <div className="flex justify-between">
                    <h5>2M Views</h5>
                    <h5>2 weeks Ago</h5>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ShowMainListItems;
