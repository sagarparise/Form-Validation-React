
# Twitter API Integration with Spring Boot

## Overview

This document outlines the implementation of Twitter API integration with Spring Boot to provide RESTful APIs for searching Tweet users and retrieving tweets of selected users.

## Authentication

The authentication method used is Header-based authentication with a random client ID and a random client secret. The client ID and client secret are generated randomly for each request.

## APIs

### 1. Search Tweet User

**Endpoint:** `/api/twitter/search`

**Method:** `GET`

**Description:** This endpoint allows searching for Twitter users based on a query string.

**Request Headers:**
- `Client-ID`: Randomly generated client ID
- `Client-Secret`: Randomly generated client secret

**Query Parameters:**
- `query`: The query string to search for Twitter users.

**Example Request:**


