import React from 'react';
import Loading from './Loading';

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      series: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
    .then((response) => {
        return response.json(); 
      })
    .then((data) => { 

      this.setState({series: data.data, loading: false})
        
    })
    .catch((err) => {
      console.log(err);
      return <h3>{err}</h3>
    })
  }

  render() {

    let movieSerie = this.state.series;

    return (
      <section className='section-series'>
        <h2>SERIES</h2>
          {  // condition si loading est true ou tableau series est vide 
            this.state.loading || !this.state.series ? (
              <Loading /> // affiche le component loading
            ) : ( // sinon affiche la reponse de la requette fetch
            <div className='container'>
                  { // filtrer le tableau series et recuperer que les elements avec category_id = "serie" 
                    // et que année est plus grand ou égal a 2010 puis map
                    this.state.series.filter(ele => ele.category_id === "serie" && ele.releaseYear >= 2010).map((serie, i) => {

                          return (
                            <article className='series' key={i}>
                          <img src={Object.keys(serie.images.url).length !== 0 ? serie.images.url : '../img/image-non-trouve.jpg'} alt={serie.title} width="500" height="300" />
                          <h3>{serie.title}</h3>
                          {/* <p>{serie.description}</p> */}
                        </article>
                    )

                  })
                  }
            </div>
          )
        }
      </section>
    );
  }
}
export default Series;