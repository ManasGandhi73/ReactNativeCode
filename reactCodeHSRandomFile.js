import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
    state = {
        team1: 'Team 1',
        team2: 'Team 2',
        inputValue: 'You can change me!',
        wins1: 0,
        wins2: 0,
        kills1: 0,
        kills2: 0,
        teamWin1: 0,
        teamWin2: 0,
        teamLoss1: 0,
        teamLoss2: 0,
        teamTies: 0,
        namePageDisplay: 'block',
        scorePageDisplay: 'none',
        standingsPageDisplay: 'none'
    };

    // When Team Names button is pressed, show team names page
    handleNamePagePress = () => this.setState(state => ({
        namePageDisplay: 'block',
        scorePageDisplay: 'none',
        standingsPageDisplay: 'none'
    }));
    
    // When Scores button is pressed, show scores page
    handleScorePagePress = () => this.setState(state => ({
        namePageDisplay: 'none',
        scorePageDisplay: 'block',
        standingsPageDisplay: 'none'
    }));
    
    // When Standings button is pressed, show standings page
    handleStandingsPagePress = () => this.setState(state => ({
        namePageDisplay: 'none',
        scorePageDisplay: 'none',
        standingsPageDisplay: 'block'
    }));
    
    _handleTextChange = team1 => {
        this.setState({ team1 });
    };
    
    _handleTextChange2 = team2 => {
        this.setState({ team2 });
    };

    addWin1 = () => {
        this.setState({
            wins1: Number(this.state.wins1) + 1
        })
    };
    
    addWin2 = () => {
        this.setState({
            wins2: Number(this.state.wins2) + 1
        })
    };
    
    addKill1 = () => {
        this.setState({
            kills1: Number(this.state.kills1) + 1
        })
    };
    
    addKill2 = () => {
        this.setState({
            kills2: Number(this.state.kills2) + 1
        })
    };
    

    submit = () => {
        if (this.state.kills1 > this.state.kills2) {
            this.setState({ 
                teamWin1: this.state.teamWin1 + 1,
                teamLoss2: this.state.teamLoss2 + 1
            })
        }
        else if (this.state.kills2 > this.state.kills1) {
            this.setState({ 
                teamWin2: this.state.teamWin2 + 1,
                teamLoss1: this.state.teamLoss1 + 1
            })
        }
        else if (this.state.kills1 == this.state.kills2) {
            this.setState({ 
                teamTies: this.state.teamTies + 1
            })
        }
        this.setState({
            wins1: 0,
            wins2: 0,
            kills1: 0,
            kills2: 0
        })
    };
    
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.contentContainer}>
                    <View style={{ display: this.state.scorePageDisplay }}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUTEhIVFRMVFRUVFRgYFhcVGRUVFRIWFhUVFxgYHSggGxolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0mHSUtLS0tMDAtLS0yLS0tLS0tLS0tLS0tLS0tLS0tKy0rLS0tLS0vLS0rKy0tLSstNzctN//AABEIAPsAyQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwcGAQj/xAA8EAACAQIDBQUGAgkFAQAAAAAAAQIDEQQhMQUSQVFxBhNhgcEHIjKRodEUUiNCU2JzsbLh8BUzNXKSY//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAlEQEBAAICAgEEAgMAAAAAAAAAAQIDETEEIVEFEjJBgaETInH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+SklqRqmK5ASKlRRV27EGrtLP3Vl4mup72uZGq4inDJ68tfmShaUMZGXg+TJJ5qOMindrLgWWGxyaupJrk+AJVmCPRxkZZXs/EkEJAAAAAAAAAAAAAAAAAAABD2ntSjh4OdepGnFcZPXwS1b8Ec27Te1SWcMFCy072az6xh89fkVyzxx7b6fG2bfxn8un4jEwgrzkorx9EVn+vQllTefjl8kfnLaGOxNWr3069SdT8zk7rXKNsks3krLMu9kduKkLRxMd9fmSSkuq0f0K47ca22+BsxnM9u1SxN3dt35mFbFpau75I8psnb9OtG9KopritJLqnmi4ws4yfjyf+Zmv/HBZcbxkmfiKtTKN7f5qzKGz2vizfgWOEqR0l7vTT+xZQirZBKgeB56GmWz5ax+zPSqmk72Pk6SYOHmI4mUXaa+5Nw+1JLTNcmT8Tgk1mt5fVFTX2Y1nB+T1+YOF5hdownlez5P0ZMPG9407SRYYLaE1knvLkxwjn5eiBGoY2MvB8n9ySQsAAAAAAAAAh7T2nRw8N+tUjCPi9fBLVs5z2h9qLd4YOnbh3k1nrrGH356Iplsxx7dGjxdu6/6T+f06NtPalHDwdSvUjTiuMna/RavyOa7c9rKleGEhu//AEqLw/Vhw8+Wh4DH46rWm51pynN8ZO/kuSzeS5kGrQT8Gc2W+31PT2NP0zDD3l7v9LjG4qrXnv1qkpyfGTv8uRFqYVPTIgUZyho8uXAm0cZF65P6GNlejjceOOkarh2tV5karS5q5dkTE4aL0yf0EyMsOVRGnKElKnJxktGnZrzPS7I7cVINRxEd9fmWU14taS+mnEo6lNrU1zinqbY52dOLd42GycZR2PYHaeFRJ05qpHinlKPlqv7Hq8DtWE/hlZ/lf+Zn5pipQkpU5OMlo07NdGj0+yO3NSHu4iPeL80bKfmtH9NTox2y9vK3eBnh7w9x+goYhccjcmc92F2rjUjenUVWPFN2kut8158z1OB2rCfwys/yv/MzVwWWXirkwnTTMIYhccjcmBBxODTWaTX8imr4OzvB/wCdS/xLXPP6FTjKqXxfQIqHTxbTtJfclfjYfml8iA5OTslc3fg6v5V9APWgAhICHtPadHDw361SMI+LtfwS46o5v2i9qbd4YOnZftKiz1/Vhw6vnoUyzxx7b6fG2bvxnr5/TpG09qUcPDfr1Y04/vO1/BLVvwRzntF7UW7wwcLcO9ms9NYw+/LQ51jsbVrz361SVST4yd/lwS6GqMDmz329Pa8f6Zrw95+7/SVjcZVrz361SU5PjJ3+XLyNOSEIG10jnenJJOIjN3PrpiazPm80A7o0zpEmNRMyZPKLJUOFaUNNPmiVRx8JZSyfjp8zCVjRUw6fgyeZe1eLOkyphuKZDnS8jWpThxy+hn+LvrkOKjmXtqnTNM6fmS+8G4mW5UuMvSBT3oSUqcnGS0admvNHp9j9uakLRxEd9fnVlNdVo/poVUMIpeBhW2e1wuuZfHbww3eJjsnuOtbF7TwqxvTqKolrFv3o9Vqv7F5R2rylb904AsPOElKnJqS0s7NeZ6LZPbirTtDEx31+ZZTXVaS+h0Ybpe3kb/p2eHvH26/V2hOWUcumv9jGlhL5yf8AnU8/sbb9OrG9KamuK0kuqea/uXMttUIRzl735dZGzz8uZeLF1hIWWSVvqSDw2M7QVJ5Q9yPh8T8yu/FVP2k//UvuCOpbR2lRoQ361SMI+L18EtW8tEc/7Q+0ltOOEhu8O8ms+sY/f5HhMZjalaW/VnKcnxk7/Ll5FfWlwbucOe/K9en0Wj6Zrw95+7/TPaWOqVpudWcqk3xk7+S5LwRCaNiRi4mPL0uOJxH2MTcjGmZkJD7GTR8AS27yepjKkYH2MmgNUqIzWpJjURlJriEcIMr6mKZOdNcDDuL6g4Q2ap0U/AsHhzCWG5Zk8q3HlVyg10PsahYdwaK2FXKzLfcpdd/TX3jN1PGySs8yJKnKPQ1yxEVrryJ45UuX29p2/fMiYupFfFZ+HEjTxLemRDnIvjgx2eR64jZh8VKNaDg3F78bNOz+JcUdDwU85HNaP+7D/vD+pHSMHqzq19PE8225TlYxqaXM/wAQvEgVMQl4mn8U+SNHFyrJp8CFUWeliRGTRl3sXkzyn21jRT6nyUWSO5XAwaCWqDRsTPjij6kB9AAAA1zqcgPrn4GSka1U5oxCG9M2wnc0Q6mak0EpB8IzrGjEY+MV7z8kJOUXKSc1KqYlLTNkStj4rKTz5Ip8TtCUvhW6vqR6azNZr+XHn5XvjFPr41vT3V9Srh8XzN8zRDU1xkkcmzO5X2kJ5GpRMZVUjGnCc3aKb6epPClyjKk/0sP+8P6ke+lO3Gx5LC7J3WnN5pp2XNZq7LOWMSbbbbJm3jpwb5M7Fo6+eRj3viUc8TObtG/RHz/T6v5H819ylyyvdZzGfqN9LFvjmSIuMtGVEZGyNTyMri+kx22drWMnE2Kums0V0cU+OZvo1E9MylnDfHOVJNbmz7Js1NkLNykgpI0bx9jdjg5bpTRpkSKdFczZ3K4gQ4o2RpkuMUtEaMRioU9XnyWbHaLZJzWUKXkaMbVhDWWfLVlfitqzllH3V9fmVs6vmaTX8ubZ5Mn4peJx0npkvqQJSPjbZ9UTaSRxZ53K81ikbEzXKqkYwjKbtFN9CWdykZzqrqa6dOU3aKb6epZYbZHGb8l9yzq1KcI7sUui9Stz+GGe5BwGxE7Oo7/ur1ZaVa1Omt2KWXCPqRMNGtXmqVGEpyekYJtvrbgdC7M+yOpO08bU7uOvdws56frT0XlfQTDLLtzZ7XPaUa2IqblKEpyekYJyf0OhdmfZHUnaeNn3cde6g05PPSU9F5XeeqOqbG2Jh8LDcw9KNNcbLN+MpPNvJalgb465GNztcJ7Y9j6+Er1J0aLWGb9yULz3Y2WU+Kz5nmP9Ql+ZfQ/TjRH/AAFL9lT/APEfsUy0y1M2WPydCZsUyx2h2bnHOk99cnlJejKbeadmnfk8mZSy9Pbx2ypikE7aEeEzYpjhrKn0cc18Wf8AMkwrp5qxUtmDnyKXCVrjus7Xl4sx6FbSxjXxZ/zN9TGwSvfy4lLjW0248cpyqGutjVH4n5cSorY+T091fUjqZea/ljn5U6xWFfac3lH3V9fmV86vmYTdz4omkxkcmezLK+3xts+qJjKqkfKVOdR2im34epZlcpH2VVIxpwnN2im+nqXGF2BazqO/7q9WSnUhTdopZcEVufwxz3IFDY1rOo/JerJm/CCskuiPtGNbEVFTpQlOTyUYJyf08zoXZn2R1J2njandr9nBpy0/WnouOl9BMcsu3Lntc7w1KtXmqdGEpyekYJt+fJaZnROzHsjqTtPGz3I691B3k89JS0j5XefA6nsbYmHwsNzD0o01xss3/wBpPN+bLA3x1yMbnartjbDw+FhuYelGmsrtL3pW4ylq/PmWIBooAAAAAPzXh9qSWUveXPj/AHNsMPSrpqSTy6SXRlbsrD1cRWhTpwlJuUU1CLk1FvOT6K78j2vaL2b4rDtzofp6a/LlUjnxjx4fD8jh/wAV7jqmzivBbQ2DKLfdveXJ5S+zKreadmn0ep6aOMkm1NO61vk11JUcPRrpqSTyy4SXRkffZ+Tqw3/LycZ3PpaY/s3OOdJ765PKS9GU8nKLtJNNap5MvLL068dkrYaa/A2Rmma6/Amdpz/FrbFzBzPtGlOo7Qi2/D1ZdhcpDvLCnCc3aKb6epc4XYNrOo7/ALq082TZVqdNbsUui9Slz+GGW5VYbZHGb8l6stYYinTikkui9SPhqVavNU6MJTk9IwTb+h0Tsz7I6krTxs+7WvdQacukp6LjpfqJhcu3Nntc/pOviJqnShKUnpGCbets/ms9DoHZj2R1JWnjam5HJ91DOT8JS0j5XefA6nsbYmHwsNzD0o01xss5eMpPNvqWBvjrkY3O1X7G2Jh8LDcw9KNNcbLOXjKWrfUsADRQAAAAAAAAAAEHZGx6GGgqdClGnHwWb8W9W+pOAAou0HZLCYxfpadp8KkPdmtePHXimcv7RezfFYe86D7+ms/dVqiVuMePHQ7aCmWEq0ysfm3D7RnF7s1ezs75STWqZtx1KlWSuk8ujR3Hb/ZTC4tXq00p8KkfdmvPjpxOQ9s+zjwFaMO834zi5QdrNJStaXC+mZy56ft9xvhtePxWwZr/AG3vLk8pfZlRUozct3dd1qrWt15HvcGryXT0I22Ye9Ho/wCZTHZeeK6rtv2+3n8DsJa1Hf8AdXq/sWk8RTpLdil0j6mjE1Xu62PX9gPZ9HHU/wATWqtUd6UVCCtKTi1duT0WumZpjLm5s9l/bxtJ18RNU6UJSk9IwTb11fhms9DoHZj2RzlaeNqbkcn3cGnJ+EpaLhp46HU9j7Fw+FhuYelGnHjZZy8ZPV6ssDox1yMLnar9jbEw+FhuYelGmuNlm/GUnm3lxLAA0UAAAAAAAAAAAAAAAAAAAAAA5N7aYXrYf+HP+pHWTkvtqqWr4f8Ahz/rRnt/FfDt5TBOzXT0MNq5yj09TZgPiXT0Pu0oLeXT1PPnbqvTzuN+F9TtfsZ/4uP8Wr/UcUxvwvr6na/Yz/xcf41X+o69LDY90ADpYgAAAAAAAAAAAAAAAAAAAAAAABD2nsujiIOFenGpF8GtPFPVPxRMAHO9r+zrde/hZ3Wf6OevSMvnqePxHZ/F1KyoxoT30s01ZJXebk8rZPPid0BhfHxt5jWbbxw5rsH2V01aWMnvvXu4NqPnLV8dLcDoeDwlOlBU6UIwhHSMUopdEjeDXHGY9M7lb2AAsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==' }}
                        >
                        
                            <View style={styles.title}>
                                <Text style={styles.title}>
                                    BEDWARS COUNTER
                                </Text>
                            </View>
                            
                            <View style={{flexDirection: 'row'}}>
                                <View style={[styles.textContainer]}>
                                    <Text style={styles.teamText}>
                                        {this.state.team1}
                                    </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.teamText}>
                                        {this.state.team2}
                                    </Text>
                                    
                                </View>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                
                                <TouchableHighlight
                                        onPress = {this.addWin1}
                                    >
                                    <View style={[styles.button, {borderColor: 'blue', backgroundColor: 'lightblue'}]}>
                                        <Text style={[styles.buttonText, {color: 'blue'}]}>
                                        Winstreak: {this.state.wins1}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                        onPress = {this.addWin2}
                                    >
                                    <View style={[styles.button, {borderColor: 'yellow', backgroundColor: 'lightyellow'}]}>
                                        <Text style={[styles.buttonText, {color: 'yellow'}]}>
                                            Winstreak: {this.state.wins2}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                        onPress = {this.addKill1}
                                    >
                                    <View style={[styles.button, {borderColor: 'green', backgroundColor: 'lightgreen'}]}>
                                        <Text style={[styles.buttonText, {color: 'green'}]}>
                                            Kills: {this.state.kills1}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                        onPress = {this.addKill2}
                                    >
                                    <View style={[styles.button, {borderColor: 'red', backgroundColor: '#ffcccb'}]}>
                                        <Text style={[styles.buttonText, {color: 'red'}]}>
                                            Kills: {this.state.kills2}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                        onPress = {this.submit}
                                    >
                                    <View style={[styles.resetButton, {backgroundColor: 'lightgray'}]}>
                                        <Text style={styles.buttonText}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </ImageBackground>
                    </View>
                    
                    <View style={{ display: this.state.namePageDisplay }}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'data:image/jpeg;base64,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' }}
                        >
                            <View style={{height: (5*deviceHeight)/6, alignItems: 'center', justifyContent: 'center'}}>
                            
                                <View style={styles.textFieldContainers}>
                                    <Text style={styles.textFieldText}>
                                        Team 1: 
                                    </Text>
                                    
                                    <View style={styles.textFields}>
                                        <TextInput
                                            multiline = {true}
                                            value={this.state.name}
                                            onChangeText={this._handleTextChange}
                                            style={styles.textFieldStyles}
                                        />
                                    </View>
                                </View>
                                
                                <View style={styles.textFieldContainers}>
                                    <Text style={styles.textFieldText}>
                                        Team 2: 
                                    </Text>
                                    
                                    <View style={styles.textFields}>
                                        <TextInput
                                            multiline = {true}
                                            value={this.state.date}
                                            onChangeText={this._handleTextChange2}
                                            style={styles.textFieldStyles}
                                        />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    
                    <View style={{ display: this.state.standingsPageDisplay }}>
                       <ImageBackground
                            style={styles.background}
                            source={{ uri: 'data:image/jpeg;base64,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' }}
                        >
                        
                            <View style={styles.standingsContainer}>
                                <View style={styles.standingsBox}>
                                    <Text style={styles.standingsTextLarge}>
                                        Standings
                                    </Text>
                                    <Text style={styles.standingsTextSmall}>
                                        {this.state.team1}: {this.state.teamWin1} - {this.state.teamLoss1} - {this.state.teamTies}
                                    </Text>
                                    <Text style={styles.standingsTextSmall}>
                                        {this.state.team2}: {this.state.teamWin2} - {this.state.teamLoss2} - {this.state.teamTies}
                                    </Text>
                                </View>
                            </View>
                        
                        </ImageBackground>

                    </View>
                    
                </View>
                    {/*Bottom nav bar shows on each screen*/}
                    <View style={styles.navbarContainer}>
                        <TouchableHighlight style={styles.navButton}
                            onPress={this.handleNamePagePress}
                        >
                            <Text style={styles.navButtonText}>
                                Team Names
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navButton}
                            onPress={this.handleScorePagePress}
                        >
                            <Text style={styles.navButtonText}>
                                Scoring
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navButton}
                            onPress={this.handleStandingsPagePress}
                        >
                            <Text style={styles.navButtonText}>
                                Standings
                            </Text>
                        </TouchableHighlight>
                    </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D1B58B',
    },
    background: {
        height: deviceHeight,
        width: deviceWidth
    },
    title: {
        color: 'black',
        fontSize: deviceHeight/17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: deviceHeight/50,
        fontFamily: 'Times New Roman'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight/5
    },
    paragraph: {
        color: 'white',
        fontSize: deviceHeight/20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight/30
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: deviceHeight/6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    allButtonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: deviceHeight/3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    teamText: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Times New Roman',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: deviceHeight/25
    },
    textContainer: {
        height: deviceHeight/25,
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight/30
    },
    button: {
        flexDirection: 'column',
        height: deviceHeight/7,
        width: (7/16) * deviceWidth,
        borderColor: 'white',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: deviceHeight/50,
        fontFamily: 'Times New Roman',
    },
    bottomButtonsContainer: {
        flexDirection: 'column',
        height: deviceHeight/9,
        width: deviceWidth
    },
    resetButton: {
        flexDirection: 'column',
        height: deviceHeight/9,
        width: deviceWidth * (2/3),
        backgroundColor: 'lightgray',
        borderColor: 'black',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: deviceHeight/50,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold'
    },
    submitButton: {
        flexDirection: 'column',
        height: deviceHeight/9,
        width: deviceWidth * (1/3),
        backgroundColor: 'lightgray',
        borderColor: 'black',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: deviceHeight/50,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'black',
        fontSize: deviceHeight/25,
        textAlign: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: '#add8e6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: 'black',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: '#D1B58B',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: '#038001',
        fontWeight: 'bold'
    },
    textFieldContainers: {
        flexDirection: 'row',
        height: deviceHeight/6,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: deviceHeight/30
    },
    textFieldText: {
        fontWeight: 'bold',
        alignItems: 'left',
        justifyContent: 'left',
        fontSize: deviceHeight/30
    },
    textFields: {
        backgroundColor: '#ffcccb',
        borderWidth: 1.5,
        borderColor: 'black',
        height: deviceHeight/8,
        width: 150,
        margin: 10,
        justifyContent: 'right',
        alignItems: 'right',
        fontSize: deviceHeight/30
    },
    textFieldStyles: {
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceHeight/4,
        height: deviceHeight/15,
        padding: 8,
        fontSize: deviceHeight/20
    },
    standingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight * (5/6),
    },
    standingsBox: {
        height: deviceHeight * (1/5),
        width: deviceWidth * (4/5),
        backgroundColor: 'black',
        borderColor: 'blue',
        borderWidth: '2',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    standingsTextLarge: {
        fontWeight: 'bold',
        alignItems: 'left',
        justifyContent: 'left',
        fontSize: deviceHeight/15,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    standingsTextSmall: {
        fontWeight: 'bold',
        alignItems: 'left',
        justifyContent: 'left',
        fontSize: deviceHeight/20,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
});