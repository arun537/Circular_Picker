import React, { PureComponent } from 'react';
import { G, Circle, Text, Line } from 'react-native-svg';
import range from 'lodash.range';
import PropTypes from 'prop-types'; // ES6


export default class CircularFace extends PureComponent {

    static propTypes = {
        r: PropTypes.number,
        stroke: PropTypes.string,
        importantDates: PropTypes.arrayOf(PropTypes.number).isRequired
    }


    renderDateAccodingToIndex(i) {
        var date = new Date();
        if (i >= 0 && i <= 20) {
            var last = new Date(date.getTime() + ((i+1) * 24 * 60 * 60 * 1000));
            var day =last.getDate();
            
            return day;
        } else if(i >= 31 && i <= 39){
            var last = new Date(date.getTime() + ((i-39) * 24 * 60 * 60 * 1000));
            var day =last.getDate();
            return day;
        }else{
            return date.getDate();
        }
    }

    render() {
        const { r, stroke } = this.props;
        const faceRadius = r - 1;
        const textRadius = r - 26;

        return (
            <G>
                {/* {
          range(48).map(i => {
            const cos = Math.cos(2 * Math.PI / 48 * i);
            const sin = Math.sin(2 * Math.PI / 48 * i);

            return (
              <Line
                key={i}
                stroke={stroke}
                strokeWidth={i % 4 === 0 ? 3 : 1}
                x1={cos * faceRadius}
                y1={sin * faceRadius}
                x2={cos * (faceRadius - 7)}
                y2={sin * (faceRadius - 7)}
              />
            );
          })
        } */}
                <G transform={{ translate: "0, 5" }}>
                    {
                        range(40).map((h, i) => {
                            if (i > 20 && i < 32) {
                                    return <Line
                                        key={i}
                                        stroke={stroke}
                                        strokeWidth={i % 5 === 0 ? 3 : 1}
                                        x1={(faceRadius + 1) * Math.cos(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20)}
                                        y1={(faceRadius + 1) * Math.sin(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20)}
                                        x2={(faceRadius + 1 - 7) * Math.cos(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20)}
                                        y2={(faceRadius + 1 - 7) * Math.sin(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20)}
                                    />
                                }
                            else {
                                    console.log((2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20));
                                    return <G>
                                        <Text
                                        key={i}
                                        fill={stroke}
                                        fontSize="10"
                                        textAnchor="middle"
                                        x={faceRadius * Math.cos(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20)}
                                        y={faceRadius * Math.sin(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20)}
                                    >
                                        {this.renderDateAccodingToIndex(i)}
                                    </Text>
                                    {this.props.importantDates.includes(this.renderDateAccodingToIndex(i))
                                    ?
                                    <G
                                        transform={{translate:`0,-3`}}
                                    >
                                        <Circle
                                        r={13}
                                        fill={'transparent'}
                                        stroke={'#96afc7'}
                                        strokeWidth="2"
                                        x={((faceRadius) * Math.cos(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20))}
                                        y={((faceRadius) * Math.sin(2 * Math.PI / 40 * i - Math.PI / 2 + Math.PI / 20))}
                                        />
                                    </G>
                                    :
                                    null
                                    }
                                    </G>
                            }
                        })
                    }
                </G>
            </G>
        );
    }
}
