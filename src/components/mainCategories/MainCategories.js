import React from 'react';
import { mainCategoryActions } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MainCategories extends React.Component {


  constructor() {
    super();
    this.state = {
      currentPage: 1,
      categoriesPerPage: 12,
      category: [],
      isLoading: true
    };
    this.changePage = this.changePage.bind(this);

  }

  changePage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.props.dispatch(mainCategoryActions.getAll(this.props.match.params.id));
    this.setState({isLoading:false});
    console.log(this.props);
  }

  render() {
    const { mainCategories } = this.props;
    const { isLoading } = this.state;

    if(isLoading) {
      return <p>Loading ...</p>;
    }

    return (

      <section className="container">
        <div className="row ">

          <div className="col-md-2 sidebar content-sidebar ">
            <div className="list-group">
              <a href="my-groups.html" className="list-group-item list-group-item-action sidebar-button">Moje grupy</a>
              <a href="#" className="list-group-item list-group-item-action sidebar-button">Moje Wydarzenia</a>
              <a href="#" className="list-group-item list-group-item-action sidebar-button">Znajomi</a>
              <a href="#" className="list-group-item list-group-item-action sidebar-button">Wiadomości</a>
              <div className="lines"> </div>
              <a href="more-category-logged.html" className="list-group-item list-group-item-action sidebar-button ">Kategorie</a>
              <a href="more-groups-logged.html" className="list-group-item list-group-item-action sidebar-button">Grupy</a>
              <a href="more-events-logged.html" className="list-group-item list-group-item-action sidebar-button">Wydarzenia</a>
            </div>
          </div>

          <div class="col-md-10 ">
            <div class="row">
              <div class="col-md-10 offset-md-1  header ">
                <h1>Kategorie Zainteresowań</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-md-10 offset-md-1 content" >
                {mainCategories.loading ? (<em>Ładowanie kategorii <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                </em>) : (
                  <div class="col-md-4">
                  {mainCategories &&
                    <div>
                      {mainCategories.category.map((cat, index) =>
                        <div key={index}><Link to={`/subCategories/${cat.id}`} className="col-md-4">{cat.name}</Link></div>
                      )}
                    </div>
                  }
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
    const { mainCategories } = state;
    return {
        mainCategories
    };
}

const connectedMainCategories = connect(mapStateToProps)(MainCategories);
export { connectedMainCategories as MainCategories };
