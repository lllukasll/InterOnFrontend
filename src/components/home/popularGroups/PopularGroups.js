import React from 'react';

class PopularGroups extends React.Component {
  render() {
       return (
         <div className="row">
        <div className="col-md-8 offset-md-2 header ">
          <h1>Najpopularniejsze grupy</h1>
        </div>
        <div className="col-md-8 offset-md-2 content ">
          <div className="col-md-10 offset-md-1  group-content ">
            <div className= "row">
              <div className="col-md-4">
                <img src="/images/motocykle.jpg" alt="img" className="image-responsive  img-margin" />
              </div>
              <div className="col-md-6 offset-md-1 group-description" >
               <h3> Motycykle </h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                 do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Ut enim ad minim veniam, quis nostrud</p>
              <button type="button" className="btn btn-secondary details-btn">Szczegóły</button>
            </div>
            </div>
          </div>
          <div className="col-md-10 offset-md-1 group-content ">
            <div className= "row">
              <div className="col-md-4">
                <img src="/images/nozna.jpg" alt="img" className="image-responsive  img-margin" />
              </div>
              <div className="col-md-6 offset-md-1 group-description" >
               <h3> Piłka Nożna </h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                 do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Ut enim ad minim veniam, quis nostrud</p>
              <button type="button" className="btn btn-secondary details-btn">Szczegóły</button>
            </div>
            </div>
          </div>
          <div className="row interest-content">
            <div className="col-md-4 offset-md-8">
              <button type="button" className="btn btn-secondary more-btn">Zobacz więcej</button>

            </div>
          </div>
        </div>


      </div>
     );
   }
}

export default PopularGroups;
