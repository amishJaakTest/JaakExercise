
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect, sinon } from '../../../__testHelpers__';
import Release from './../Release';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Release Component', () => {
    const defaultProps = {
        id: "UmVsZWFzZUdyb3VwOjBkZmJiMTQyLWVjMzEtNGEyNi05ZDczLThkNTcyZTg5NzBiZA==",
        title: "Green Is the Colour",
        firstReleaseDate: "1993-07",
        coverArtArchive : "http://coverartarchive.org/release/ee7104dd-ed89-4b4f-850a-97c265381eb8/18662681690.jpg"
    }

    it('renders correctly', () => {
        const wrapper = shallow(<Release {...defaultProps} />);
        expect(wrapper.length).to.eql(1);
      });

    it('contains the correct div class', () => {
        const wrapper = shallow(<Release {...defaultProps} />);
        expect(wrapper.find('div').at(0).prop('className')).to.eql('releaseRow');
    });

    it('contains the correct title', () => {
        const wrapper = shallow(<Release {...defaultProps} />);
        expect(wrapper.find('div').at(1).text()).to.eql('Title: Green Is the Colour');
    });

    it('contains the correct firstReleaseDate', () => {
        const wrapper = shallow(<Release {...defaultProps} />);
        expect(wrapper.find('div').at(2).text()).to.eql('First Release Date: 1993-07');
    });

});