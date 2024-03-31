"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateProfile(profileUpdates: any) {
  console.log("TESTING");
  // const supabase = createClient();
  // const { data, error } = await supabase.auth.getUser();

  // console.log("WHY");

  // if (error) {
  //   console.error("Authentication error:", error.message);
  //   return { error: "User is not authenticated." };
  // }

  // if (profileUpdates.profilePicture) {
  //   const profileResponse = await supabase
  //     .from("profile")
  //     .select("profilePicture")
  //     .eq("id", data.user.id)
  //     .single();

  //   if (profileResponse.error) {
  //     console.error(
  //       "Error fetching existing profile picture:",
  //       profileResponse.error.message
  //     );
  //     return { error: profileResponse.error.message };
  //   }

  //   const existingProfilePicture = profileResponse.data.profilePicture;
  //   const { data: uploadData, error: uploadError } = await supabase.storage
  //     .from("pfps")
  //     .upload(
  //       `${data.user.id}/${profileUpdates.profilePicture.name}`,
  //       profileUpdates.profilePicture,
  //       {
  //         upsert: true,
  //       }
  //     );

  //   if (uploadError) {
  //     console.error(
  //       "Error uploading new profile picture:",
  //       uploadError.message
  //     );
  //     return { error: uploadError.message };
  //   }

  //   const profilePictureUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${uploadData.path}`;

  //   if (existingProfilePicture) {
  //     const { error: removalError } = await supabase.storage
  //       .from("pfps")
  //       .remove([existingProfilePicture]);
  //     if (removalError) {
  //       console.error(
  //         "Error removing existing profile picture:",
  //         removalError.message
  //       );
  //     }
  //   }

  //   profileUpdates.profilePicture = profilePictureUrl;
  // }

  // const { error: updateError } = await supabase
  //   .from("profile")
  //   .update(profileUpdates)
  //   .eq("id", data.user.id);

  // if (updateError) {
  //   console.error("Error updating profile:", updateError.message);
  //   return { error: updateError.message };
  // }

  // revalidatePath("/", "layout");
  // return { message: "Profile updated successfully." };
}
