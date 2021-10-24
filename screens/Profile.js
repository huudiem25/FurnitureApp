import React from "react";
import {  View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
import { icons } from "../constants";
const Profile = () => {
  return (
    <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
      <Text
        style={{
          color: COLORS.black,
          ...FONTS.h1,
          textAlign: "center",
          borderWidth: 1,
          borderRadius: 15,
          backgroundColor: COLORS.darkGray,
        }}
      >
        {" "}
        Profile
      </Text>

      <View>
        <Image
          source={require("../assets/images/furniture.jpg")}
          style={{
            width: 200,
            justifyContent: "center",
            height: 180,
            left: 65,
            borderRadius: 35,
            top: 10,
          }}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ color: COLORS.secondary, ...FONTS.h3 }}>
          Describe: Furniture provides comfort at home while letting us express
          our personal style, so it’s as much about form as function.
        </Text>

        <View>
          <Text>
            <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>
              Contact Info: {"\n"}
            </Text>
            <View></View>
            <Image
              source={icons.email}
              resizeMode="contain"
              style={{
                tintColor: COLORS.black,
                width: 25,
                height: 25,
                right: 20,
              }}
            />
            <Text style={{ fontWeight: "bold" }}> Email:</Text>{" "}
            huudiem2510@gmail.com{"\n"}
            <Image
              source={icons.address}
              resizeMode="contain"
              style={{
                tintColor: COLORS.black,
                width: 25,
                height: 25,
                right: 20,
              }}
            />
            <Text style={{ fontWeight: "bold" }}>Address:</Text> District 10 Ho
            Chi Minh City{"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold", ...FONTS.h3 }}> My QR:</Text>
            <Text>{"\n"}</Text>
            <Image
              source={icons.qr}
              resizeMode="contain"
              style={{
                tintColor: COLORS.black,
                width: 70,
                height: 50,
              }}
            />
            <Text>{"\n"}</Text>
            <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>
              {"\n"}Team:{"\n"}
            </Text>
            <Text style={{ fontStyle: "italic", ...FONTS.h3 }}>
              1.Đinh Hữu Điểm{"\n"}
            </Text>
            <Text style={{ fontStyle: "italic", ...FONTS.h3 }}>
              2.Hồng Quang Thành{"\n"}
            </Text>
            <Text style={{ fontStyle: "italic", ...FONTS.h3 }}>
              3.Mai Thanh An{"\n"}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
