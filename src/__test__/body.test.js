import React from "react";
import Body from "../component/Body";
import {fireEvent, render} from '@testing-library/react-native'


describe("body testing of homepage " , () =>{
    it("rendering testing " , () => {
      const page = render(<Body />)
      const mainview = page.getByTestId("mainview");
      
      expect(mainview).toBeTruthy();
    })
    it("testing slide view " ,() =>{
        const page = render(<Body />)
        const slideView = page.getByTestId("slideView")
        expect(slideView).toBeTruthy();
    })
    it("testing drawer button " , () => {
        const page = render(<Body />)
        const Drawerbutton = page.getByTestId("Drawerbutton")
        expect(Drawerbutton).toBeTruthy();
    })
    
    it("testing video thumbnail " ,  () => {
        const page = render(<Body />)
        const VideoThumbnail =  page.getAllByTestId('VideoThumbnail')
        expect(VideoThumbnail).toBeTruthy();
    })
    it("testing channel logo  " , () => {
        const page = render(<Body />)
        const ChannelLogo = page.getAllByTestId("ChannelLogo")
        expect(ChannelLogo).toBeTruthy();
    })
    it("testing of Description  " , () => {
        const page = render(<Body />)
        const VideoDescription = page.getAllByTestId("VideoDescription")
        expect(VideoDescription).toBeTruthy();
    })
    it("testing of channel Name  " , () => {
        const page = render(<Body />)
        const ChannelName = page.getAllByTestId("ChannelName")
        expect(ChannelName).toBeTruthy();
    })
    it("testing of sideButton   " , () => {
        const page = render(<Body />)
        const sideButton = page.getAllByTestId("sideButton")
        expect(sideButton).toBeTruthy();
    })

    it('should render all category buttons', () => {
        const { getByTestId } = render(<Body />);
        
        const categories = ["All", "SUVs", "Apple", "Music", "News", "Mixes", "Samsung", "JavaScript", "Live", "Sedans", "Trucks"];
        
        categories.forEach(category => {
          expect(getByTestId(`category-${category}`)).toBeTruthy();
        });
    });
   
      it("testing slidebutton   " , () => {
        const page = render(<Body />)
        const categoryAll = page.getAllByTestId("category-All")
        expect(categoryAll).toBeTruthy();
    })

    it("should render the Drawer button", () => {
        const page = render(<Body />);
        const drawerButton = page.getByTestId("Drawerbutton");
        expect(drawerButton).toBeTruthy();
      });
    
      it("should render the 'All' category button", () => {
        const page = render(<Body />);
        const categoryAll = page.getByTestId("category-All");
        expect(categoryAll).toBeTruthy();
      });
    
      it("should render the 'SUVs' category button", () => {
        const page = render(<Body />);
        const categorySUVs = page.getByTestId("category-SUVs");
        expect(categorySUVs).toBeTruthy();
      });
    
      it("should render the 'Apple' category button", () => {
        const page = render(<Body />);
        const categoryApple = page.getByTestId("category-Apple");
        expect(categoryApple).toBeTruthy();
      });
    
      it("should render the 'Music' category button", () => {
        const page = render(<Body />);
        const categoryMusic = page.getByTestId("category-Music");
        expect(categoryMusic).toBeTruthy();
      });
    
      it("should render the 'News' category button", () => {
        const page = render(<Body />);
        const categoryNews = page.getByTestId("category-News");
        expect(categoryNews).toBeTruthy();
      });
    
      it("should render the 'Mixes' category button", () => {
        const page = render(<Body />);
        const categoryMixes = page.getByTestId("category-Mixes");
        expect(categoryMixes).toBeTruthy();
      });
    
      it("should render the 'Samsung' category button", () => {
        const page = render(<Body />);
        const categorySamsung = page.getByTestId("category-Samsung");
        expect(categorySamsung).toBeTruthy();
      });
    
      it("should render the 'JavaScript' category button", () => {
        const page = render(<Body />);
        const categoryJavaScript = page.getByTestId("category-JavaScript");
        expect(categoryJavaScript).toBeTruthy();
      });
    
      it("should render the 'Live' category button", () => {
        const page = render(<Body />);
        const categoryLive = page.getByTestId("category-Live");
        expect(categoryLive).toBeTruthy();
      });
    
      it("should render the 'Sedans' category button", () => {
        const page = render(<Body />);
        const categorySedans = page.getByTestId("category-Sedans");
        expect(categorySedans).toBeTruthy();
      });
    
      it("should render the 'Trucks' category button", () => {
        const page = render(<Body />);
        const categoryTrucks = page.getByTestId("category-Trucks");
        expect(categoryTrucks).toBeTruthy();
      });
   
    
      
   
    
})