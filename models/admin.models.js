import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

// Admin Schema
const adminSchema = new Schema(
  {
    adminId: {
      type: Number,
      required: true,
      unique: true,
    },
    adminName: {
      type: String,
      required: true,
    },
    adminEmail: {
      type: String,
      required: true,
      unique: true,
    },
    adminPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Admin = model("Admin", adminSchema);

// District Schema
const districtSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const District = model("District", districtSchema);

// Category Schema
const categorySchema = new Schema(
  {
    categoryId: {
      type: Number,
      required: true,
      unique: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model("Category", categorySchema);

// Subcategory Schema
const subcategorySchema = new Schema(
  {
    subcategoryId: {
      type: Number,
      required: true,
      unique: true,
    },
    subcategoryName: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

export const Subcategory = model("Subcategory", subcategorySchema);

// Place Schema
const placeSchema = new Schema(
  {
    placeId: {
      type: Number,
      required: true,
      unique: true,
    },
    placeName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Place = model("Place", placeSchema);
