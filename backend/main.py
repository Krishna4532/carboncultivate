from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI()

# Crucial: This allows your Next.js frontend to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "CarbonCultivate dMRV Engine Active"}

@app.get("/api/verify")
async def verify_land(lat: float, lng: float):
    # Simulate satellite processing time
    time.sleep(2) 
    
    # Professional response structure
    return {
        "metadata": {
            "coordinates": f"{lat}, {lng}",
            "satellite": "Sentinel-2B",
            "resolution": "10m"
        },
        "analysis": {
            "soc_content": "2.4%", # Soil Organic Carbon
            "biomass_index": 0.74,
            "verification": "SUCCESS",
            "credits_estimatated": 142
        }
    }