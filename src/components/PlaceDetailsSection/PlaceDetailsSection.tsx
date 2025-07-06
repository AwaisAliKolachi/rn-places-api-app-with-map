import React, { useMemo, useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useAppContext } from '../../context';
import { Palette, screenHeight, screenWidth } from '../../utils';
import { GoogleLocationDetailResult } from '@appandflow/react-native-google-autocomplete';
import { Rating } from 'react-native-ratings';

export type GooglePlaceReview = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

export type PlaceDetailsSectionProps = {
  place: {
    editorial_summary?: { overview: string };
    rating?: number;
    user_ratings_total?: number;
    reviews?: GooglePlaceReview[];
  } & GoogleLocationDetailResult;
};

export const PlaceDetailsSection = React.memo(
  ({ place }: PlaceDetailsSectionProps) => {
    const { color } = useAppContext();
    const styles = PlaceDetailsSectionStyles(color);

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['10%', '30%', '60%', '96%'], []);

    return (
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        enableOverDrag={false}
        handleIndicatorStyle={styles.handleIndicator}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{place.name}</Text>
              {place.rating && (
                <Text style={styles.ratingText}>
                  ⭐{place?.rating} ({place?.user_ratings_total})
                </Text>
              )}
            </View>
            <Text style={styles.subtitle}>{place.formatted_address}</Text>
          </View>

          {place.editorial_summary?.overview && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                {place.editorial_summary?.overview}
              </Text>
            </View>
          )}

          {place?.reviews && place?.reviews?.length > 0 && (
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewHeading}>User Reviews</Text>
              {place.reviews.slice(0, 5).map((review, index) => (
                <View key={index} style={styles.reviewItem}>
                  <View style={styles.reviewHeader}>
                    <Image
                      source={{ uri: review.profile_photo_url }}
                      style={styles.profilePhoto}
                      resizeMode="contain"
                    />
                    <View style={styles.reviewInfo}>
                      <Text style={styles.authorName}>
                        {review.author_name}
                      </Text>
                      <Text style={styles.timeText}>
                        {review.relative_time_description}
                      </Text>
                    </View>
                  </View>
                  <Rating
                    ratingCount={5}
                    startingValue={review.rating}
                    imageSize={18}
                    readonly
                    style={{ alignSelf: 'flex-start' }}
                  />
                  <Text style={styles.reviewText}>{review.text}</Text>
                </View>
              ))}
            </View>
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  }
);

export const PlaceDetailsSectionStyles = ({}: Palette) =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      padding: 20,
      paddingBottom: 70,
    },
    handleIndicator: {
      width: 40,
      height: 6,
      backgroundColor: '#ccc',
    },
    titleContainer: {},
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#444',
      maxWidth: '70%',
    },
    ratingText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#444',
      maxWidth: '100%',
    },
    subtitle: {
      fontSize: 14,
      color: '#777',
      maxWidth: '80%',
      marginTop: 5,
    },
    descriptionContainer: {
      marginTop: 10,
    },
    description: {
      fontSize: 16,
      color: '#444',
    },
    reviewsContainer: {
      marginTop: 15,
    },
    reviewHeading: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
    },
    reviewItem: {
      marginBottom: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    profilePhoto: {
      width: 36,
      height: 36,
      marginRight: 10,
    },
    reviewInfo: {
      flex: 1,
    },
    authorName: {
      fontSize: 14,
      fontWeight: '600',
      color: '#333',
    },
    timeText: {
      fontSize: 12,
      color: '#888',
    },
    reviewText: {
      fontSize: 14,
      color: '#444',
      marginTop: 4,
    },
  });
