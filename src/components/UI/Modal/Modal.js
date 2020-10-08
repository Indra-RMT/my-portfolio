import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import ShowImages from '../ShowImages/ShowImages';

class Modal extends Component {
  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render () {
    let toRender = null;
    const allProps = this.props.allProps;

    const allImage = [
      allProps.urlThumbnailPhoto, 
      allProps.image1, 
      allProps.image2, 
      allProps.image3
    ]

    document.body.style.overflow = 'unset';
    
    if(this.props.show){
      document.body.style.overflow = 'hidden';

      let url = <a href={allProps.url} target="_blank" rel="noopener noreferrer">{allProps.url}</a>;
      if(allProps.url === null){
        url = '-';
      }

      let listTechnology = [];
      allProps.technologies.forEach(tech => {
        listTechnology.push(<li key={tech}>{tech}</li>);
      });
      
      toRender = 
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}>
          <div className={classes.headerModal}>
            <span className={classes.title}>{this.props.children}</span>
            <div
              className={classes.closeButton}
              onClick={this.props.btnCloseClicked}>
              X
            </div>
          </div>
          <div className={classes.content}>
            <ShowImages
              allImage={allImage}>
            </ShowImages>
            <div className={classes.showDetail}>
              <div className={classes.webDetail}>
                <div className={classes.labelDetail}>
                  Technologies :
                </div>
                <div className={classes.contentDetail}>
                  <ul>
                    {listTechnology}
                  </ul>
                </div>
              </div>
              <div className={classes.webDetail}>
                <div className={classes.labelDetail}>
                  Description :
                </div>
                <div className={classes.contentDetail}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </div>
              </div>
              <div className={classes.webDetail}>
                <div className={classes.labelDetail}>
                  URL :
                </div>
                <div className={classes.contentDetail}>
                  {url}
                </div>
              </div>
              <div className={classes.webDetail}>
                <div className={classes.labelDetail}>
                  Github :
                </div>
                <div className={classes.contentDetail}>
                  {url}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    }

    return (
      toRender
    )
  }
}

export default Modal;