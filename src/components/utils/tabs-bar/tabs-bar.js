import React, { Component } from 'react';
import Tab from './tab/tab';
import { withRouter } from 'react-router-dom';
import './tabs-bar.scss';

class TabsBar extends Component {
    constructor (props) {
      super (props);

      if (typeof props.tabs === "undefined") {
        throw Error("This component cant exist without next props:\n tabs\n");
      }

      this.state = {
        sliderPosition: 0,
        sliderVisibility: "none"
      };

      this.tabsElements = [];
      this.tabs = this.props.tabs;
      this.setTabsStyles();
    }

    componentDidMount() {
      this.props.history.listen((location) => {
        const path = location.pathname;
  
        if (this.tabs.length) {
          for (let i = 0; i < this.tabs.length; i++) {
            const tab = this.tabs[i];
      
            if (tab.url === path) {
              this.setActiveTab(i);
              break;
            } else {
              this.clearActiveTabs();
              this.setTabsStyles();
            }
          }
        }
      });
    }

    onActive = (tabId) => {
      this.setActiveTab(tabId);
    }

    setTabElement = (tabElem, tabId, isActive) => {
      if (this.tabs.length) {
        if (this.tabs[tabId] && !this.tabs[tabId].tabElem) {
          this.tabs[tabId].tabElem = tabElem;
          
          if (isActive) {
            this.setActiveTab(tabId);
          }
        }
      }
    }

    setSliderPosition = (value) => {
      this.setState({sliderVisibility: "block", sliderPosition: value});
    }

    clearActiveTabs = () => {
      if (this.tabs.length) {
        for (let i = 0; i < this.tabs.length; i++) {
          this.tabs[i].isActive = false;
        }
      }
    }

    setActiveTab = (tabId) => {
      if (this.tabs.length) {
        this.clearActiveTabs();
        this.tabs[tabId].isActive = true;

        this.setTabsStyles();
      }
    }

    setTabsStyles = () => {
      if (this.tabs.length) {
        let activeExists = false;

        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].isActive) {
            if (this.tabs[i].tabElem) {
              activeExists = true;
              this.tabs[i].tabElem.classList.add("active");
              this.setSliderPosition(this.tabs[i].tabElem.offsetLeft);
            }
          } else {
            if (this.tabs[i].tabElem) {
              this.tabs[i].tabElem.classList.remove("active");
            }
          }
        }

        if (!activeExists) {
          this.setState({sliderVisibility: "none"});
        }
      }
    }
    

    render () {
        return (
            <ul className="Tabs">
              {
                this.tabs.map(tab => {
                  return (
                    <Tab 
                      key={tab.id}
                      id={tab.id}
                      title={tab.title} 
                      url={tab.url}
                      isActive={tab.isActive} 
                      onActive={this.onActive}
                      setTabElement={this.setTabElement}
                      />
                  );
                })
              }

              <li className="Tabs__presentation-slider" style={{display: this.state.sliderVisibility, left: this.state.sliderPosition}}></li>
            </ul>
        );
    }
}

export default withRouter(TabsBar);