import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');
    const propertyType = searchParams.get('propertyType');

    const keywordPattern = new RegExp(keyword, 'i');

    // Match keyword pattern against database fields
    let query = {
      $or: [
        { name: keywordPattern },
        { description: keywordPattern },
        { 'location.street': keywordPattern },
        { 'location.city': keywordPattern },
        { 'location.state': keywordPattern },
        { 'location.zipcode': keywordPattern },
      ],
    };

    // Only check for property if its not 'All'
    if (propertyType && propertyType !== 'All') {
      const typePattern = new RegExp(propertyType, 'i');
      query.type = typePattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
