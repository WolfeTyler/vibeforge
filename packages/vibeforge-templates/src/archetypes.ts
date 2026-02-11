import { Archetype } from "@/lib/types";

export const ARCHETYPES: Record<string, Archetype> = {
  saas_crud: {
    id: "saas_crud",
    name: "CRUD SaaS Dashboard",
    description: "Data-heavy internal tools, admin panels, or B2B SaaS apps.",
    keywordHints: ["dashboard", "crm", "admin", "inventory", "management"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What is the primary problem this dashboard solves?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Helps sales teams track leads without spreadsheets"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who are the primary users?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "admins", label: "System Admins" },
          { value: "employees", label: "Internal Employees" },
          { value: "customers", label: "External Customers" },
          { value: "managers", label: "Managers / Approvers" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What are the main 'Things' (Entities) being managed? (Select all that apply)",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "users", label: "Users" },
          { value: "products", label: "Products/Items" },
          { value: "orders", label: "Orders/Invoices" },
          { value: "projects", label: "Projects/Tasks" },
          { value: "clients", label: "Clients/Customers" },
          { value: "reports", label: "Reports/Analytics" }
        ],
        allowOther: true,
        mode: "both",
        helpText: "These will become your database tables."
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the top 3 actions a user performs?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "create_record", label: "Create new records" },
          { value: "search_filter", label: "Search and filter large datasets" },
          { value: "export_data", label: "Export data (CSV/PDF)" },
          { value: "approve_reject", label: "Approve/Reject requests" },
          { value: "visualize_stats", label: "View charts/stats" },
          { value: "invite_team", label: "Invite team members" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1? (Select all that apply)",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "crud_operations", label: "Full CRUD for main entities" },
          { value: "search_filters", label: "Search & filters" },
          { value: "bulk_actions", label: "Bulk actions (delete, update many)" },
          { value: "data_export", label: "Data export (CSV/PDF)" },
          { value: "dashboard_charts", label: "Dashboard with charts" },
          { value: "notifications", label: "Email/in-app notifications" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_app", label: "Native mobile app" },
          { value: "ai_features", label: "AI/ML features" },
          { value: "multi_tenant", label: "Multi-tenancy" },
          { value: "internationalization", label: "Multi-language support" },
          { value: "advanced_analytics", label: "Advanced analytics/BI" },
          { value: "third_party_integrations", label: "Third-party integrations" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Public)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "admin", label: "Admin (full access)" },
          { value: "editor", label: "Editor (can modify)" },
          { value: "viewer", label: "Viewer (read-only)" },
          { value: "manager", label: "Manager (approve/reject)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "stripe", label: "Stripe (Payments)" },
          { value: "sendgrid", label: "SendGrid (Email)" },
          { value: "s3", label: "S3/Cloud Storage (File uploads)" },
          { value: "slack", label: "Slack (Notifications)" },
          { value: "google_sheets", label: "Google Sheets (Import/Export)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements that must not be compromised?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "fast_load", label: "Must load under 2 seconds" },
          { value: "data_privacy", label: "Must encrypt sensitive data" },
          { value: "audit_trail", label: "Must have audit trail / activity log" },
          { value: "offline_capable", label: "Must work offline" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What is the visual vibe?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure if this tool is successful?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 50% reduction in time spent on manual data entry"
      }
    ]
  },
  marketplace: {
    id: "marketplace",
    name: "Marketplace",
    description: "Two-sided platforms connecting buyers and sellers.",
    keywordHints: ["marketplace", "connect", "buy", "sell", "listing"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What is being exchanged on this marketplace?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Vintage sneakers, Consulting hours, rare seeds"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who are the two sides?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "buyers", label: "Buyers / Consumers" },
          { value: "sellers", label: "Sellers / Vendors" },
          { value: "creators", label: "Creators" },
          { value: "service_providers", label: "Service Providers" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "Key interactions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "search_browse", label: "Search & Browse Listings" },
          { value: "checkout", label: "Checkout / Purchase" },
          { value: "messaging", label: "In-app Messaging" },
          { value: "reviews", label: "Ratings & Reviews" },
          { value: "booking", label: "Booking a time slot" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What are the main data objects?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "listings", label: "Listings / Products" },
          { value: "users", label: "User Profiles" },
          { value: "orders", label: "Orders / Transactions" },
          { value: "reviews", label: "Reviews / Ratings" },
          { value: "messages", label: "Messages" },
          { value: "categories", label: "Categories / Tags" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What features must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "listing_creation", label: "Create & manage listings" },
          { value: "search_filter", label: "Search with filters (price, category)" },
          { value: "checkout_flow", label: "Checkout / payment flow" },
          { value: "user_profiles", label: "Seller & buyer profiles" },
          { value: "reviews", label: "Reviews after purchase" },
          { value: "messaging", label: "Buyer-seller messaging" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "escrow", label: "Escrow / dispute resolution" },
          { value: "subscription_sellers", label: "Seller subscription tiers" },
          { value: "auction", label: "Auction / bidding system" },
          { value: "shipping_tracking", label: "Shipping tracking integration" },
          { value: "mobile_app", label: "Native mobile app" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Public)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "buyer", label: "Buyer" },
          { value: "seller", label: "Seller" },
          { value: "admin", label: "Admin / Moderator" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "stripe", label: "Stripe (Payments)" },
          { value: "s3", label: "S3/Cloud Storage (Image uploads)" },
          { value: "sendgrid", label: "SendGrid (Email notifications)" },
          { value: "maps", label: "Google Maps (Location)" },
          { value: "algolia", label: "Algolia (Search)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "secure_payments", label: "Must have secure payment processing" },
          { value: "image_uploads", label: "Must support image uploads for listings" },
          { value: "search_fast", label: "Search must be fast and relevant" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits this marketplace?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 100 listings in the first month, 10 completed transactions"
      }
    ]
  },
  ai_tool: {
    id: "ai_tool",
    name: "AI Workflow Tool",
    description: "Input -> Process -> Output tools using LLMs.",
    keywordHints: ["ai", "generator", "summarizer", "bot", "chat"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What is the core transformation?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Turn blog posts into tweets"
      },
      {
        id: "q_input",
        clause: "mvpScope",
        prompt: "What does the user input?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "text", label: "Text Prompt" },
          { value: "file_upload", label: "File Upload (PDF, CSV)" },
          { value: "url", label: "URL / Website" },
          { value: "image", label: "Image" }
        ],
        mode: "both"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who will use this tool?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "marketers", label: "Marketers / Content creators" },
          { value: "developers", label: "Developers" },
          { value: "students", label: "Students / Researchers" },
          { value: "business", label: "Business professionals" },
          { value: "general", label: "General public" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the main user actions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "input_process", label: "Submit input & get AI output" },
          { value: "edit_refine", label: "Edit / refine the output" },
          { value: "save_history", label: "Save history of generations" },
          { value: "share_export", label: "Share or export results" },
          { value: "templates", label: "Use pre-built templates" },
          { value: "batch", label: "Batch process multiple inputs" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data needs to be stored?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "generations", label: "Generations / Outputs" },
          { value: "prompts", label: "Saved Prompts / Templates" },
          { value: "users", label: "User Accounts" },
          { value: "usage", label: "Usage / Credit Tracking" },
          { value: "files", label: "Uploaded Files" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "fine_tuning", label: "Custom model fine-tuning" },
          { value: "multi_model", label: "Multiple AI model selection" },
          { value: "api_access", label: "API access for developers" },
          { value: "team_features", label: "Team collaboration features" },
          { value: "billing", label: "Billing / subscription system" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Public / Anonymous)" }
        ],
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Which AI/third-party services are needed?",
        type: "multiChoice",
        required: true,
        critical: false,
        options: [
          { value: "openai", label: "OpenAI (GPT)" },
          { value: "anthropic", label: "Anthropic (Claude)" },
          { value: "replicate", label: "Replicate (Image models)" },
          { value: "s3", label: "S3/Cloud Storage (File uploads)" },
          { value: "stripe", label: "Stripe (Usage billing)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "streaming", label: "Must stream AI responses in real-time" },
          { value: "rate_limiting", label: "Must rate-limit API usage" },
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "fast_response", label: "Must respond within 5 seconds" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits this tool?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure if this tool is successful?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., Users generate 5+ outputs per session"
      }
    ]
  },
  booking: {
    id: "booking",
    name: "Booking & Scheduling",
    description: "Time-based reservation systems.",
    keywordHints: ["book", "schedule", "appointment", "calendar"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What is being booked?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Haircuts, Meeting rooms, Dentist appointments"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who is booking vs who is managing?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "customers", label: "Customers (Public)" },
          { value: "staff", label: "Staff / Providers" },
          { value: "admins", label: "Admins" }
        ],
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the key booking interactions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "browse_slots", label: "Browse available time slots" },
          { value: "book_appointment", label: "Book an appointment" },
          { value: "cancel_reschedule", label: "Cancel / reschedule" },
          { value: "reminders", label: "Receive reminders" },
          { value: "manage_calendar", label: "Manage provider calendar" },
          { value: "waitlist", label: "Join a waitlist" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "appointments", label: "Appointments / Bookings" },
          { value: "providers", label: "Providers / Staff" },
          { value: "customers", label: "Customer Profiles" },
          { value: "services", label: "Services (with duration/price)" },
          { value: "availability", label: "Availability / Time Slots" },
          { value: "locations", label: "Locations / Rooms" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "calendar_view", label: "Calendar view of availability" },
          { value: "booking_form", label: "Booking form with confirmation" },
          { value: "cancellation", label: "Cancellation / rescheduling" },
          { value: "email_confirmation", label: "Email confirmation" },
          { value: "provider_dashboard", label: "Provider management dashboard" },
          { value: "service_listing", label: "List of services with prices" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "payments", label: "Online payment processing" },
          { value: "recurring", label: "Recurring bookings" },
          { value: "multi_location", label: "Multi-location support" },
          { value: "mobile_app", label: "Native mobile app" },
          { value: "calendar_sync", label: "Google/Outlook calendar sync" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Public booking)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "customer", label: "Customer (books appointments)" },
          { value: "provider", label: "Provider / Staff (manages calendar)" },
          { value: "admin", label: "Admin (manages everything)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "google_calendar", label: "Google Calendar" },
          { value: "stripe", label: "Stripe (Payments)" },
          { value: "twilio", label: "Twilio (SMS reminders)" },
          { value: "sendgrid", label: "SendGrid (Email)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "no_double_booking", label: "Must prevent double-booking" },
          { value: "timezone_support", label: "Must handle time zones correctly" },
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "email_confirmations", label: "Must send booking confirmations" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 80% of bookings made online vs phone"
      }
    ]
  },
  social: {
    id: "social",
    name: "Social / Community",
    description: "Feeds, profiles, and connections.",
    keywordHints: ["social", "community", "network", "chat"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What brings people together here?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Sharing hiking trails, discussing niche hobbies"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "How do users interact?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "post_feed", label: "Posting to a Feed" },
          { value: "comments", label: "Commenting / Replying" },
          { value: "groups", label: "Joining Groups" },
          { value: "direct_message", label: "Direct Messaging" },
          { value: "follow", label: "Following other users" },
          { value: "likes", label: "Likes / Reactions" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who is the target community?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "general", label: "General public" },
          { value: "niche_hobby", label: "Niche hobby enthusiasts" },
          { value: "professionals", label: "Professionals / Industry peers" },
          { value: "students", label: "Students" },
          { value: "local_community", label: "Local community members" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "users", label: "User Profiles" },
          { value: "posts", label: "Posts / Content" },
          { value: "comments", label: "Comments / Replies" },
          { value: "messages", label: "Messages" },
          { value: "groups", label: "Groups / Communities" },
          { value: "follows", label: "Followers / Connections" },
          { value: "media", label: "Media (Images, Videos)" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "user_profiles", label: "User profiles with bio & avatar" },
          { value: "content_feed", label: "Content feed (chronological or algorithmic)" },
          { value: "create_posts", label: "Create posts (text, images)" },
          { value: "comments", label: "Comments on posts" },
          { value: "follow_system", label: "Follow / unfollow users" },
          { value: "notifications", label: "In-app notifications" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "stories", label: "Stories / ephemeral content" },
          { value: "live_streaming", label: "Live streaming" },
          { value: "marketplace", label: "Built-in marketplace" },
          { value: "recommendation_algo", label: "AI recommendation algorithm" },
          { value: "mobile_app", label: "Native mobile app" },
          { value: "video_chat", label: "Video chat / calls" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Anonymous posting)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "user", label: "Regular User" },
          { value: "moderator", label: "Moderator" },
          { value: "admin", label: "Admin" },
          { value: "creator", label: "Verified Creator" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "s3", label: "S3/Cloud Storage (Image uploads)" },
          { value: "sendgrid", label: "SendGrid (Email notifications)" },
          { value: "push_notifications", label: "Push Notifications" },
          { value: "content_moderation", label: "Content Moderation API" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "content_moderation", label: "Must have content moderation" },
          { value: "fast_feed", label: "Feed must load quickly" },
          { value: "privacy_controls", label: "Must have privacy controls" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits this community?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 50 daily active users posting or commenting"
      }
    ]
  },
  ecommerce: {
    id: "ecommerce",
    name: "E-Commerce / Storefront",
    description: "Online shops with product catalog, cart, checkout, and order management.",
    keywordHints: ["shop", "store", "ecommerce", "products", "cart", "checkout", "buy"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What are you selling?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Handmade candles, Digital art prints, Vintage clothing"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who are your customers?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "general_consumers", label: "General consumers" },
          { value: "niche_hobbyists", label: "Niche hobbyists / collectors" },
          { value: "businesses", label: "Businesses (B2B)" },
          { value: "local_customers", label: "Local customers" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the key shopping interactions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "browse_products", label: "Browse product catalog" },
          { value: "search_filter", label: "Search & filter products" },
          { value: "add_to_cart", label: "Add to cart" },
          { value: "checkout", label: "Checkout & pay" },
          { value: "order_tracking", label: "Track orders" },
          { value: "reviews", label: "Leave product reviews" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "products", label: "Products (name, price, images)" },
          { value: "categories", label: "Categories / Collections" },
          { value: "cart", label: "Shopping Cart" },
          { value: "orders", label: "Orders" },
          { value: "customers", label: "Customer Accounts" },
          { value: "reviews", label: "Product Reviews" },
          { value: "inventory", label: "Inventory / Stock Levels" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "product_listing", label: "Product listing page" },
          { value: "product_detail", label: "Product detail page" },
          { value: "shopping_cart", label: "Shopping cart" },
          { value: "checkout", label: "Checkout with payment" },
          { value: "order_confirmation", label: "Order confirmation & email" },
          { value: "admin_panel", label: "Admin panel to manage products" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "multi_vendor", label: "Multi-vendor marketplace" },
          { value: "subscriptions", label: "Subscription products" },
          { value: "loyalty_program", label: "Loyalty / rewards program" },
          { value: "mobile_app", label: "Native mobile app" },
          { value: "international_shipping", label: "International shipping" },
          { value: "inventory_management", label: "Advanced inventory management" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should customers log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Guest checkout only)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "customer", label: "Customer (shops & orders)" },
          { value: "admin", label: "Admin (manages products & orders)" },
          { value: "fulfillment", label: "Fulfillment staff (ships orders)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "stripe", label: "Stripe (Payments)" },
          { value: "s3", label: "S3/Cloud Storage (Product images)" },
          { value: "sendgrid", label: "SendGrid (Order emails)" },
          { value: "shippo", label: "Shippo (Shipping rates)" },
          { value: "analytics", label: "Google Analytics" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "secure_checkout", label: "Must have secure checkout (HTTPS)" },
          { value: "fast_load", label: "Product pages must load fast" },
          { value: "seo", label: "Must be SEO-friendly" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits your store?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 10 orders per week, 5% conversion rate"
      }
    ]
  },
  project_management: {
    id: "project_management",
    name: "Project / Task Management",
    description: "Kanban boards, task lists, and team collaboration tools.",
    keywordHints: ["project", "task", "kanban", "trello", "todo", "team", "collaboration"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What kind of work is being managed?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Software development sprints, Marketing campaigns, Home renovation tasks"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who will use this tool?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "solo_user", label: "Solo user (personal tasks)" },
          { value: "small_team", label: "Small team (2-10 people)" },
          { value: "large_team", label: "Large team / organization" },
          { value: "freelancers", label: "Freelancers with clients" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the key actions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "create_tasks", label: "Create & assign tasks" },
          { value: "kanban_board", label: "Drag tasks across columns (Kanban)" },
          { value: "due_dates", label: "Set due dates & priorities" },
          { value: "comments", label: "Comment on tasks" },
          { value: "file_attachments", label: "Attach files to tasks" },
          { value: "progress_tracking", label: "Track progress / status" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "projects", label: "Projects / Workspaces" },
          { value: "tasks", label: "Tasks / Issues" },
          { value: "columns", label: "Columns / Statuses" },
          { value: "users", label: "Team Members" },
          { value: "comments", label: "Comments" },
          { value: "labels", label: "Labels / Tags" },
          { value: "attachments", label: "Attachments" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "task_crud", label: "Create, edit, delete tasks" },
          { value: "kanban_view", label: "Kanban board view" },
          { value: "list_view", label: "List view" },
          { value: "assign_members", label: "Assign tasks to team members" },
          { value: "due_dates", label: "Due dates & reminders" },
          { value: "search", label: "Search & filter tasks" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "gantt_chart", label: "Gantt chart / timeline view" },
          { value: "time_tracking", label: "Time tracking" },
          { value: "automation", label: "Task automation / workflows" },
          { value: "reporting", label: "Advanced reporting" },
          { value: "mobile_app", label: "Native mobile app" },
          { value: "integrations", label: "Third-party integrations (Slack, GitHub)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Personal use only)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "owner", label: "Project Owner (full control)" },
          { value: "member", label: "Team Member (edit tasks)" },
          { value: "viewer", label: "Viewer (read-only)" },
          { value: "admin", label: "Admin (manage members)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "slack", label: "Slack (Notifications)" },
          { value: "github", label: "GitHub (Link issues)" },
          { value: "google_drive", label: "Google Drive (Attachments)" },
          { value: "sendgrid", label: "SendGrid (Email notifications)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "drag_drop", label: "Must support drag-and-drop" },
          { value: "real_time", label: "Must update in real-time for team" },
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "keyboard_shortcuts", label: "Must have keyboard shortcuts" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., Team completes 80% of tasks before due date"
      }
    ]
  },
  blog_cms: {
    id: "blog_cms",
    name: "Content / Blog / CMS",
    description: "Publishing platforms, blogs, knowledge bases, or documentation sites.",
    keywordHints: ["blog", "cms", "content", "publish", "articles", "wiki", "documentation"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What kind of content is being published?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Tech blog posts, Company knowledge base, Recipe collection"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who writes and who reads?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "solo_blogger", label: "Solo blogger / author" },
          { value: "editorial_team", label: "Editorial team" },
          { value: "public_readers", label: "Public readers" },
          { value: "internal_team", label: "Internal team (private docs)" },
          { value: "community", label: "Community contributors" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the key content interactions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "write_publish", label: "Write & publish articles" },
          { value: "rich_editor", label: "Rich text / markdown editor" },
          { value: "categories_tags", label: "Organize with categories & tags" },
          { value: "search", label: "Search content" },
          { value: "comments", label: "Reader comments" },
          { value: "draft_review", label: "Draft & review workflow" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "posts", label: "Posts / Articles" },
          { value: "authors", label: "Authors / Users" },
          { value: "categories", label: "Categories" },
          { value: "tags", label: "Tags" },
          { value: "comments", label: "Comments" },
          { value: "media", label: "Media / Images" },
          { value: "pages", label: "Static Pages" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "post_editor", label: "Post editor (rich text or markdown)" },
          { value: "post_listing", label: "Public post listing page" },
          { value: "post_detail", label: "Individual post pages" },
          { value: "categories", label: "Category organization" },
          { value: "admin_dashboard", label: "Admin dashboard" },
          { value: "rss_feed", label: "RSS feed" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "multi_author", label: "Multi-author with editorial workflow" },
          { value: "newsletter", label: "Newsletter / email subscriptions" },
          { value: "monetization", label: "Paywalls / monetization" },
          { value: "social_sharing", label: "Social media auto-posting" },
          { value: "seo_tools", label: "Advanced SEO tools" },
          { value: "mobile_app", label: "Native mobile app" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should authors log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Static site)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "admin", label: "Admin (full control)" },
          { value: "author", label: "Author (write & publish)" },
          { value: "editor", label: "Editor (review & approve)" },
          { value: "reader", label: "Reader (view & comment)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "s3", label: "S3/Cloud Storage (Image uploads)" },
          { value: "sendgrid", label: "SendGrid (Newsletter emails)" },
          { value: "analytics", label: "Google Analytics" },
          { value: "algolia", label: "Algolia (Full-text search)" },
          { value: "cloudflare", label: "Cloudflare (CDN/caching)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "seo_friendly", label: "Must be SEO-friendly" },
          { value: "fast_load", label: "Pages must load fast" },
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "markdown_support", label: "Must support Markdown" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits your site?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 1000 monthly readers, 5 posts per week"
      }
    ]
  },
  analytics_dashboard: {
    id: "analytics_dashboard",
    name: "Analytics Dashboard",
    description: "Data visualization tools with charts, metrics, and KPI tracking.",
    keywordHints: ["analytics", "metrics", "charts", "kpi", "data", "visualization", "reports"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What data are you tracking or visualizing?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Website traffic metrics, Sales performance, Fitness progress"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who will view these dashboards?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "executives", label: "Executives / Decision makers" },
          { value: "analysts", label: "Data analysts" },
          { value: "team_leads", label: "Team leads / Managers" },
          { value: "personal", label: "Personal use (self-tracking)" },
          { value: "public", label: "Public-facing dashboard" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the key dashboard interactions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "view_charts", label: "View charts & graphs" },
          { value: "filter_date", label: "Filter by date range" },
          { value: "drill_down", label: "Drill down into details" },
          { value: "compare", label: "Compare metrics over time" },
          { value: "export_report", label: "Export reports (PDF/CSV)" },
          { value: "set_alerts", label: "Set alerts / thresholds" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "metrics", label: "Metrics / KPIs" },
          { value: "data_sources", label: "Data Sources / Connections" },
          { value: "dashboards", label: "Dashboards / Views" },
          { value: "widgets", label: "Widgets / Charts" },
          { value: "users", label: "User Accounts" },
          { value: "reports", label: "Saved Reports" },
          { value: "alerts", label: "Alerts / Notifications" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "main_dashboard", label: "Main dashboard with key metrics" },
          { value: "charts", label: "Interactive charts (line, bar, pie)" },
          { value: "date_filters", label: "Date range filters" },
          { value: "data_tables", label: "Data tables with sorting" },
          { value: "refresh", label: "Data refresh / real-time updates" },
          { value: "export", label: "Export to CSV/PDF" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "custom_dashboards", label: "Custom dashboard builder" },
          { value: "ml_predictions", label: "ML-based predictions / forecasting" },
          { value: "real_time_streaming", label: "Real-time data streaming" },
          { value: "etl", label: "ETL / data pipeline management" },
          { value: "mobile_app", label: "Native mobile app" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users access the dashboard?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Public dashboard)" }
        ],
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Where does the data come from?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "google_analytics", label: "Google Analytics" },
          { value: "stripe", label: "Stripe (Revenue data)" },
          { value: "database", label: "Direct database connection" },
          { value: "api", label: "REST API / Webhooks" },
          { value: "csv_upload", label: "CSV file upload" },
          { value: "google_sheets", label: "Google Sheets" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "fast_load", label: "Dashboard must load under 3 seconds" },
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "exportable", label: "Must export data to CSV/PDF" },
          { value: "accessible", label: "Must be color-blind friendly" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., Team checks dashboard daily, replaces weekly Excel reports"
      }
    ]
  },
  education: {
    id: "education",
    name: "Education / Course Platform",
    description: "Online learning with courses, lessons, quizzes, and progress tracking.",
    keywordHints: ["course", "learn", "education", "tutorial", "quiz", "lms", "training"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What are people learning?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Web development, Guitar basics, Spanish for travelers"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who teaches and who learns?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "students", label: "Students / Learners" },
          { value: "instructors", label: "Instructors / Teachers" },
          { value: "admins", label: "Platform Admins" },
          { value: "parents", label: "Parents (monitoring progress)" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What are the key learning interactions?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "browse_courses", label: "Browse & enroll in courses" },
          { value: "watch_lessons", label: "Watch / read lessons" },
          { value: "take_quizzes", label: "Take quizzes / assessments" },
          { value: "track_progress", label: "Track progress" },
          { value: "earn_certificates", label: "Earn certificates" },
          { value: "discuss", label: "Discussion forums per course" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What data objects are needed?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "courses", label: "Courses" },
          { value: "lessons", label: "Lessons / Modules" },
          { value: "quizzes", label: "Quizzes / Questions" },
          { value: "enrollments", label: "Enrollments" },
          { value: "progress", label: "Progress Records" },
          { value: "users", label: "User Profiles" },
          { value: "certificates", label: "Certificates" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "course_catalog", label: "Course catalog / listing" },
          { value: "lesson_viewer", label: "Lesson viewer (video/text)" },
          { value: "enrollment", label: "Course enrollment" },
          { value: "progress_tracking", label: "Progress tracking" },
          { value: "quizzes", label: "Basic quizzes" },
          { value: "instructor_dashboard", label: "Instructor dashboard" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "live_classes", label: "Live video classes" },
          { value: "gamification", label: "Gamification (badges, leaderboards)" },
          { value: "marketplace", label: "Instructor marketplace" },
          { value: "mobile_app", label: "Native mobile app" },
          { value: "ai_tutor", label: "AI-powered tutor" },
          { value: "payments", label: "Payment / subscription system" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "How should users log in?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password" },
          { value: "oauth_google", label: "Google Login" },
          { value: "magic_link", label: "Magic Link" },
          { value: "none", label: "No Auth (Free open content)" }
        ],
        mode: "deep"
      },
      {
        id: "q_roles",
        clause: "roles",
        prompt: "What user roles are needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "student", label: "Student" },
          { value: "instructor", label: "Instructor" },
          { value: "admin", label: "Admin" },
          { value: "moderator", label: "Content Moderator" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "stripe", label: "Stripe (Course payments)" },
          { value: "s3", label: "S3/Cloud Storage (Video hosting)" },
          { value: "sendgrid", label: "SendGrid (Enrollment emails)" },
          { value: "youtube", label: "YouTube (Embed videos)" },
          { value: "vimeo", label: "Vimeo (Private video hosting)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "progress_saves", label: "Must save progress automatically" },
          { value: "video_support", label: "Must support video content" },
          { value: "accessible", label: "Must be accessible (WCAG compliant)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 80% course completion rate, 100 enrolled students"
      }
    ]
  },
  game: {
    id: "game",
    name: "Game",
    description: "Browser-based games with scoring, levels, and player interaction.",
    keywordHints: ["game", "play", "score", "level", "multiplayer", "arcade", "puzzle", "rpg"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What kind of game is it?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., 2D platformer, Trivia quiz, Word puzzle, Idle clicker, RPG"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What does the player do?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "move_character", label: "Move a character / avatar" },
          { value: "solve_puzzles", label: "Solve puzzles" },
          { value: "answer_questions", label: "Answer questions (trivia/quiz)" },
          { value: "collect_resources", label: "Collect resources / items" },
          { value: "compete_others", label: "Compete against other players" },
          { value: "build_create", label: "Build or create things" },
          { value: "make_choices", label: "Make story choices" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who is the target player?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "casual", label: "Casual gamers (quick sessions)" },
          { value: "hardcore", label: "Dedicated gamers (long sessions)" },
          { value: "kids", label: "Kids / Family" },
          { value: "students", label: "Students (educational)" },
          { value: "everyone", label: "Everyone (party/social game)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What game data needs to be stored?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "players", label: "Player Profiles" },
          { value: "scores", label: "Scores / Leaderboard" },
          { value: "levels", label: "Levels / Stages" },
          { value: "inventory", label: "Inventory / Items" },
          { value: "game_state", label: "Saved Game State" },
          { value: "achievements", label: "Achievements / Badges" },
          { value: "matches", label: "Match History" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "core_gameplay", label: "Core gameplay loop" },
          { value: "scoring", label: "Score tracking" },
          { value: "levels", label: "Multiple levels / difficulty" },
          { value: "leaderboard", label: "Leaderboard (high scores)" },
          { value: "save_progress", label: "Save & resume progress" },
          { value: "sound_effects", label: "Sound effects & music" },
          { value: "tutorial", label: "Tutorial / how-to-play" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "multiplayer_realtime", label: "Real-time multiplayer" },
          { value: "in_app_purchases", label: "In-app purchases / microtransactions" },
          { value: "level_editor", label: "User-created levels (level editor)" },
          { value: "3d_graphics", label: "3D graphics" },
          { value: "mobile_app", label: "Native mobile app" },
          { value: "social_features", label: "Social features (friends, chat)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "Do players need accounts?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "email_password", label: "Email & Password (save progress)" },
          { value: "oauth_google", label: "Google Login" },
          { value: "none", label: "No Auth (play instantly, local scores)" }
        ],
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any game-related services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "canvas_webgl", label: "HTML5 Canvas / WebGL" },
          { value: "phaser", label: "Phaser.js (2D game framework)" },
          { value: "howler", label: "Howler.js (Audio)" },
          { value: "socket_io", label: "Socket.io (Real-time multiplayer)" },
          { value: "s3", label: "S3/Cloud Storage (Game assets)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "60fps", label: "Must run at 60fps" },
          { value: "mobile_playable", label: "Must be playable on mobile" },
          { value: "keyboard_mouse", label: "Must support keyboard & mouse" },
          { value: "touch_controls", label: "Must support touch controls" },
          { value: "no_lag", label: "Must have no input lag" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits the game?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., Average session length of 10+ minutes, 100 daily players"
      }
    ]
  },
  personal_site: {
    id: "personal_site",
    name: "Personal Site / Portfolio",
    description: "Portfolio websites, personal landing pages, and digital resumes.",
    keywordHints: ["portfolio", "personal", "resume", "cv", "landing page", "about me", "website"],
    questions: [
      {
        id: "q_goal",
        clause: "goal",
        prompt: "What is the purpose of your site?",
        type: "shortText",
        required: true,
        critical: true,
        mode: "both",
        placeholder: "e.g., Showcase my design work, Attract freelance clients, Online resume"
      },
      {
        id: "q_core_flows",
        clause: "coreFlows",
        prompt: "What should visitors be able to do?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "view_projects", label: "View portfolio / projects" },
          { value: "read_about", label: "Read about you / bio" },
          { value: "contact_form", label: "Send a message (contact form)" },
          { value: "download_resume", label: "Download resume / CV" },
          { value: "read_blog", label: "Read blog posts" },
          { value: "view_timeline", label: "View career timeline" }
        ],
        allowOther: true,
        mode: "both"
      },
      {
        id: "q_users",
        clause: "targetUsers",
        prompt: "Who is visiting your site?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "recruiters", label: "Recruiters / Hiring managers" },
          { value: "clients", label: "Potential clients" },
          { value: "peers", label: "Industry peers / collaborators" },
          { value: "general", label: "General audience / fans" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_entities",
        clause: "entities",
        prompt: "What content sections do you need?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "projects", label: "Projects / Portfolio items" },
          { value: "blog_posts", label: "Blog Posts" },
          { value: "skills", label: "Skills / Technologies" },
          { value: "experience", label: "Work Experience" },
          { value: "testimonials", label: "Testimonials" },
          { value: "contact_messages", label: "Contact Form Messages" }
        ],
        allowOther: true,
        mode: "deep",
        helpText: "These will become your site sections and database tables."
      },
      {
        id: "q_mvp_scope",
        clause: "mvpScope",
        prompt: "What must be in v1?",
        type: "multiChoice",
        required: true,
        critical: true,
        options: [
          { value: "hero_section", label: "Hero section with name & tagline" },
          { value: "project_gallery", label: "Project gallery with images" },
          { value: "about_bio", label: "About / Bio section" },
          { value: "contact_form", label: "Contact form" },
          { value: "resume_download", label: "Resume download" },
          { value: "social_links", label: "Social media links" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_goals",
        clause: "nonGoals",
        prompt: "What should NOT be in the MVP?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "blog", label: "Full blog system" },
          { value: "cms", label: "Admin CMS to edit content" },
          { value: "ecommerce", label: "Selling products / services online" },
          { value: "multi_language", label: "Multi-language support" },
          { value: "analytics_dashboard", label: "Built-in visitor analytics" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_auth",
        clause: "auth",
        prompt: "Does the site need a login?",
        type: "singleChoice",
        required: true,
        critical: false,
        options: [
          { value: "none", label: "No Auth (Public portfolio)" },
          { value: "email_password", label: "Email & Password (Admin CMS)" },
          { value: "magic_link", label: "Magic Link (Admin only)" }
        ],
        mode: "deep"
      },
      {
        id: "q_integrations",
        clause: "integrations",
        prompt: "Any third-party services needed?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "sendgrid", label: "SendGrid (Contact form emails)" },
          { value: "github_api", label: "GitHub API (Show repos)" },
          { value: "s3", label: "S3/Cloud Storage (Images)" },
          { value: "analytics", label: "Google Analytics" },
          { value: "calendly", label: "Calendly (Schedule meetings)" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_non_negotiables",
        clause: "nonNegotiables",
        prompt: "Any hard requirements?",
        type: "multiChoice",
        required: false,
        critical: false,
        options: [
          { value: "mobile_responsive", label: "Must be mobile-responsive" },
          { value: "fast_load", label: "Must load fast (under 2 seconds)" },
          { value: "seo_friendly", label: "Must be SEO-friendly" },
          { value: "animations", label: "Must have smooth animations" },
          { value: "dark_mode", label: "Must support dark mode" }
        ],
        allowOther: true,
        mode: "deep"
      },
      {
        id: "q_ui_style",
        clause: "uiStyle",
        prompt: "What visual style fits your brand?",
        type: "singleChoice",
        required: false,
        critical: false,
        options: [
          { value: "minimal", label: "Minimal & Clean (White space, subtle)" },
          { value: "modern", label: "Modern & Colorful (Gradients, cards)" },
          { value: "dashboard", label: "Data-Rich Dashboard (Dense, tables)" },
          { value: "playful", label: "Playful & Fun (Bright, rounded)" },
          { value: "industrial", label: "Industrial / Dev Tool (Dark, monospace)" },
          { value: "glassmorphism", label: "Glassmorphism (Frosted glass, blur)" },
          { value: "neobrutalism", label: "Neobrutalism (Bold borders, raw)" },
          { value: "bento", label: "Bento Grid (Modular cards, Apple-style)" },
          { value: "neumorphism", label: "Neumorphism (Soft 3D, extruded)" }
        ],
        mode: "deep"
      },
      {
        id: "q_success_metric",
        clause: "successMetric",
        prompt: "How will you measure success?",
        type: "shortText",
        required: false,
        critical: false,
        mode: "deep",
        placeholder: "e.g., 5 contact form submissions per month, 500 monthly visitors"
      }
    ]
  }
};
