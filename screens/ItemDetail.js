import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants';


const ItemDetail = ({ route, navigation }) => {

    const [products] = React.useState([
    
        {
            productId: 1,
            productName: 'Chair White Colour',
            price: 15.99,
            image: images.imachar,
        },
        {
            productId: 2,
            productName: 'Chair Black Colour',
            price: 19.99,
            image: images.winchar,
        },
        {
            productId: 3,
            productName: 'Chair Peach Colour',
            price: 10.99,
            image: images.redChair,
        },
    
        {
            productId: 4,
            productName: 'Studio Cupboard',
            price: 25.99,
            image: images.Studiocupboard,
        },
        {
            productId: 5,
            productName: 'Door Storage CupBoard',
            price: 30.99,
            image: images.DoorStorageCupBoard,
        },
        {
            productId: 6,
            productName: 'VITA Cupboard',
            price: 23.99,
            image: images.VITACupboard,
        },  
        {
            productId: 7,
            productName: 'Brown Table',
            price: 17.55,
            image: images.BrownTable,
        },
        {
            productId: 8,
            productName: 'Viomi Table',
            price: 16.49,
            image: images.ViomiTable,
        },
        {
            productId: 9,
            productName: 'Dining Table',
            price: 11.99,
            image: images.DiningTable,
        },

    
        {
            productId: 10,
            productName: 'Xbox Accessories',
            price: 44.99,
            image: images.XboxAccessories,
        },
        {
            productId: 11,
            productName: 'PicoPen Accessories',
            price: 22.99,
            image: images.PicoPenAccessories,
        },
        {
            productId: 12,
            productName: 'AirPod Accessories',
            price: 39.00,
            image: images.AirPodAccessories,
        },

    
])


    // header
    
    function renderHeader() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding,
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1,  alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() =>  navigation.openDrawer()}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    tintColor: COLORS.white,
                                    width: 25,
                                    height: 25,
                                    top:-20
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Cart')}
                        >
                            <Image
                                source={icons.cart}
                                resizeMode="contain"
                                style={{
                                    tintColor: COLORS.white,
                                    width: 25,
                                    height: 25,
                                    top:-20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    // renderInfo

    function renderInfo() {
        let { itemInfo } = route.params;

        if (itemInfo) {
            return (
                <ImageBackground
                    source={itemInfo.image}
                    resizeMode="stretch"
                    style={{ width: '100%', height: '100%' }}
                >
                    {renderHeader()}

                    {/* Product Tag */}
                    <View
                        style={{
                            position: 'absolute',
                            top: '45%',
                            left: '15%',
                            borderRadius: 80,
                            backgroundColor: COLORS.transparentLightGray1,
                            height: 40,
                            width: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 20,
                                backgroundColor: COLORS.blue,
                                height: 10,
                                width: 10
                            }}
                        >
                        </View>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            top: '43%',
                            left: '30%',
                            flexDirection: 'row',
                            padding: SIZES.radius * 1.5,
                            backgroundColor: COLORS.transparentLightGray1,
                            width: '50%',
                            borderRadius: 10
                        }}
                    >
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>
                                {itemInfo.productName}
                            </Text>
                        </View>

                        <View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>
                                $ {itemInfo.price.toFixed(2)}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: "20%",
                            left: SIZES.padding,
                            right: SIZES.padding
                        }}
                    >
                        <Text style={{ color: COLORS.lightGray2, ...FONTS.body2 }}>Furniture</Text>
                        <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h1 }}>{itemInfo.productName}</Text>
                    </View>
                </ImageBackground>
            )
        } else {
            <View></View>
        }
    }

    // renderFooter

    const [cart, setCart] = React.useState([]);
    const [page, setPage] = React.useState(['product']);

    const RemoveFromCart = (productToRemove) => {
        setCart(cart.filter(product => product != productToRemove));
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }

    const addToCart = (product) => {
        setCart([...cart, {...product }]);
    };

   
    function renderFooter() {
        
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: SIZES.padding,
                    right: SIZES.padding,
                    flexDirection: 'row',
                    height: 70,
                    backgroundColor: COLORS.white,
                    borderRadius: 35
                }}
            >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.dashboard}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* render product */}

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 50,
                                width: 50,
                                borderRadius: 10,
                                backgroundColor: COLORS.primary
                            }}
                            onPress ={()=>console.log('Add to Cart')}
                        >
                             
                            <Image
                                source={icons.plus}
                                style={{
                                    tintColor: COLORS.white,
                                    height: 20,
                                    width: 20
                                }}
                            />
                           
                           
                            
                        </TouchableOpacity>
                        
                    </View>

                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Image
                            source={icons.user}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                {renderInfo()}
                {renderFooter()}
                
                { page == 'product' && renderInfo()}
                { page == 'cart' && 
                    <Cart cart={cart} RemoveFromCart={RemoveFromCart}
                />}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default ItemDetail;